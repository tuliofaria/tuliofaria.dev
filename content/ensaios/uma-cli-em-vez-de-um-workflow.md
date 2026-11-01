---
n: 15
title: "Uma CLI em vez de um workflow"
excerpt: "Eu tinha nota fiscal enroscada no Asaas em mais de uma empresa. Em vez de voltar pro workflow que eu nunca lembro como montei, pedi pro meu agente escrever uma CLI. Ele fez numa rodada só."
tags:
  - ia
  - agentes
  - ferramentas
date: 1 nov 2026
read: 5 min
---

Todo mundo está dizendo que código ficou barato. Eu resolvi testar isso num problema bem chato e bem real: um monte de nota fiscal enroscada no Asaas, em mais de uma empresa.

Eu já tinha um workflow no n8n pra isso. O problema é que toda vez que eu preciso dele, eu esqueço como montei. Abro, olho os nós, tento lembrar o que cada um fazia. Desta vez eu fiz diferente: decidi criar uma CLI do Asaas. Só que quem escreveu não fui eu, foi o meu agente.

## Por que não usar uma pronta

A primeira pergunta óbvia é se já não existe uma CLI do Asaas. Existe, da comunidade. Mas o Asaas é um banco. É ali que entra e sai dinheiro das minhas empresas.

Eu não queria colocar a credencial dessa conta numa ferramenta de terceiros que eu não conheço por dentro. Queria uma coisa feita pelos meus agentes, em que eu controlo o que tem acesso à conta e consigo ler o código se precisar.

Quando escrever custa pouco, essa troca muda. Antes, "faz você mesmo" era caro demais pra um problema desse tamanho. Agora é uma tarde, às vezes menos.

## Da busca pro goal

Eu comecei onde muita gente começa, no próprio Google, no modo IA. A pergunta era simples: Go ou TypeScript pra uma CLI? Fui de Go, pela facilidade de instalação. Um binário e pronto.

Aí veio a parte que eu acho mais interessante. Em vez de sair conversando com o agente passo a passo, eu pedi um goal: um prompt de objetivo pra ele executar tudo numa rodada só, sem eu ficar interagindo no meio.

E fui refinando esse goal ali mesmo, antes de mandar pro agente:

- multi-conta no padrão do kubectl, porque eu tenho mais de uma empresa;
- credenciais guardadas no home directory;
- comandos `auth add` e `auth list` pra gerenciar as contas;
- e o `gh`, a CLI do GitHub, como referência do que é uma boa CLI.

Esse último ponto vale muito. Em vez de descrever em detalhe como eu queria os subcomandos, a ajuda e as mensagens, eu apontei pra uma ferramenta que eu já uso todo dia e que faz isso bem. O agente conhece o `gh`. A referência carrega o padrão inteiro.

## Uma rodada

O agente rodou tudo numa execução. Eu compilei o binário e, a partir dali, consegui fazer o que eu precisava. Depois ainda pedi a gestão de notas fiscais, que era o motivo de tudo.

Eu deixei o repositório e o prompt do goal públicos. Mas com um aviso que eu repito no vídeo: isso não é production-ready. É uma ferramenta pra mim, feita pro meu problema.

> Quando o código fica barato, a ferramenta sob medida deixa de ser luxo. A parte cara passa a ser saber pedir.
>
> — tese da edição

## A CLI que outros agentes conseguem usar

Tem um efeito que eu não tinha planejado e que eu acho o mais importante. Uma CLI bem feita se descreve sozinha. Você roda `--help` e ela diz o que faz, quais comandos existem, quais parâmetros cada um aceita.

Isso serve pra mim, mas serve ainda mais pros agentes. Qualquer outro agente que eu tenha consegue descobrir sozinho como usar essa CLI, só lendo o `--help`. Eu não preciso escrever integração, nem explicar a API de novo. A documentação da API do Asaas entrou na construção. Depois disso, quem usa só precisa da própria ferramenta.

Um workflow no n8n não tem isso. Ele é ótimo pra quem montou, enquanto lembra como montou. Um script solto também não: funciona, mas ninguém sabe que ele existe nem como chamar.

## Quando eu escolheria uma CLI

Não é sempre. Mas eu passei a olhar de outro jeito pra alguns problemas.

Se é uma coisa que eu faço de vez em quando, em mais de um contexto, e que mexe num serviço com API, eu penso primeiro numa CLI. Ela fica na minha máquina, eu controlo o acesso, e qualquer agente consegue usar.

E a outra mudança é no hábito. A busca que eu ia fazer de qualquer jeito, no Google, no ChatGPT ou no Claude, pode terminar num goal. E o goal termina em código rodando na minha máquina.

## Resumindo

Nota fiscal enroscada no Asaas, um workflow no n8n que eu nunca lembro como funciona, e CLIs da comunidade que eu não quis plugar num banco. Pedi pro modo IA do Google me ajudar a escolher a linguagem e montar um goal: Go, multi-conta no estilo do kubectl, credenciais no home, `auth add` e `auth list`, e o `gh` como referência.

O agente fez numa rodada. Eu compilei e usei. E a CLI ainda virou uma ferramenta que outros agentes descobrem pelo `--help`.

Fica a pergunta: qual problema do seu dia a dia você resolveria com uma CLI feita sob medida?

---

Assista ao vídeo completo em [Criei uma CLI do Asaas com IA sem escrever uma linha de código](https://www.youtube.com/watch?v=TOytDOC432w). Lá eu mostro a conversa no modo IA do Google, o goal original e o atualizado, a CLI rodando com multi-conta e a gestão de notas fiscais. O repositório e o prompt do goal estão em [tuliofaria/asaas-cli](https://github.com/tuliofaria/asaas-cli).
