---
n: 15
title: "Um loop mensal para saúde do banco"
excerpt: "Todo fim de mês um GitHub Action olha o banco de produção e abre uma issue. Um agente lê, propõe e abre os PRs. Eu só entro no merge. Na primeira rodada, uma tabela de 2,3 GB caiu no colo."
tags:
  - banco-de-dados
  - ia
  - automacao
date: 30 out 2026
read: 6 min
cover: /images/ensaios/loop-saude-banco-capa-en.png
---

Banco de dados é uma daquelas coisas que ninguém olha até dar problema. A query fica lenta, a tabela cresce, um índice que ninguém usa continua lá ocupando espaço. Ninguém esqueceu de propósito. Só não tem um momento no mês em que alguém para e olha.

Em um dos meus SaaS eu resolvi criar esse momento. E, como em quase tudo que eu tenho feito, a ideia foi me tirar do meio e só entrar onde eu preciso decidir.

## O GitHub Action que só coleta

Todo fim de mês roda um GitHub Action. O cron dispara nos dias 28 a 31, e um passo de gate só deixa seguir quando o dia seguinte é dia 1. Ele conecta no banco de produção, coleta os dados e abre uma issue com o título `db-health` e o mês.

São seis seções: as recomendações de índice do próprio otimizador, as queries que mais somam latência, as que mais leem linhas, o uso de cada índice, o tamanho das tabelas e quando cada nó do cluster subiu. Esse último parece detalhe, mas os contadores de uso de índice zeram quando um nó reinicia. Sem essa informação, um índice pode parecer inútil só porque o contador começou ontem.

Duas decisões aqui foram de propósito. A primeira: a sessão é somente leitura, e cada query tem timeout de 60 segundos. Eu sei que isso é defesa em profundidade, não garantia, mas é a camada que eu queria antes de deixar qualquer coisa conversar com produção sozinha. A segunda: não tem IA no CI. O Action não analisa nada, não sugere nada e nunca faz commit. Ele só junta os números e entrega.

Se uma seção falha, ela aparece como indisponível e as outras saem normalmente. Prefiro uma issue incompleta a nenhuma issue.

![O loop: GitHub Action, issue, agente, PRs, CI e reviewers, meu merge](/images/ensaios/loop-saude-banco-diagrama-pt.png)

## Quem pensa é o agente

A issue é a entrada para o agente. Junto com o workflow eu deixei um playbook no repositório: como ler os dados, como dar um ID estável para cada sugestão, quando um índice novo vira migration e por que limpeza de dados nunca vira PR sem decisão minha.

E tem o `history.md`. Toda sugestão que o agente faz ganha uma linha ali, aceita ou recusada. Isso parece burocracia, mas é o que faz o loop funcionar de um mês para o outro. Sem histórico, a mesma sugestão que eu já recusei volta todo mês, e eu viro de novo a pessoa que fica repetindo a mesma resposta. Recusa também vai para o histórico, com o motivo.

Hoje o caminho é esse: o Action abre a issue, o agente lê, propõe e abre os PRs, o CI e os reviewers passam por cima, e eu reviso e faço o merge. A primeira rodada eu disparei na mão, para acompanhar. Para as próximas, ainda estou avaliando como agendar. As opções que estou considerando são o agendamento do T3 Code ou uma tarefa agendada do Claude Code, que antes se chamava routines e também aceita disparo por API.

## A primeira auditoria

A primeira issue já trouxe uma coisa que eu não esperava. A maior tabela do banco era a de notificações: 2,3 GB e 5,2 milhões de linhas, três vezes a segunda maior.

E notificação antiga não tem valor nenhum. Os apps mostram as 20 mais recentes de cada usuário, e o admin mostra as últimas 100. O resto estava só ocupando espaço.

O agente propôs, eu decidi: guardar seis meses. Aí vieram dois PRs, porque o playbook manda assim.

O primeiro é só a migration: um índice em `createdAt` na tabela de notificações. O único índice que existia era por usuário, e ele não serve para buscar tudo que é mais antigo que uma data. Sem esse índice, cada limpeza ia varrer a tabela inteira. Ele vai sozinho, antes de qualquer código que dependa dele.

O segundo é um cron diário que apaga as notificações com mais de seis meses, em lotes de mil linhas, com um orçamento de dez minutos por execução. O que sobrar fica para noite seguinte. Nas primeiras noites ele vai trabalhar no acúmulo, e depois disso cada execução deve pegar pouca coisa.

Depois da limpeza, a tabela ficou com [placeholder].

> O problema não era saber olhar o banco. Era não ter um momento no mês em que alguém olhasse.
>
> — tese da edição

## O que eu levo disso

O que mais me agrada nesse loop é a divisão de papéis. O CI faz o que é determinístico e barato: coletar. O agente faz o que exige leitura: interpretar e propor. E eu faço o que só eu posso fazer: decidir quanto tempo guardar um dado e apertar o merge.

Separar o índice do código que usa ele, guardar as recusas, sessão somente leitura. Nada disso é sofisticado. São guardrails que deixam eu confiar num processo que roda sem mim.

E a pergunta que fica: qual parte do seu sistema só recebe atenção quando quebra?

---

Se você quiser ver como eu tirei a mim mesmo do loop de review dos PRs, leia [Quando o código deixa de ser o gargalo](/ensaios/quando-o-codigo-deixa-de-ser-o-gargalo).
