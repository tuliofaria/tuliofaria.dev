---
n: 17
title: "O agente que para na hora certa"
excerpt: "Seu agente de IA não sabe desistir. Antes de deixar ele sozinho com deploy, formulário ou pagamento, configure três limites: permissão mínima, hook que bloqueia quando falha e confirmação humana."
tags:
  - ia
  - agentes
  - ferramentas
date: 5 nov 2026
read: 5 min
---

Seu agente de IA não sabe desistir. E isso é um problema.

Num relatório de outubro, a Anthropic contou o que acontecia quando o Claude não conseguia terminar uma tarefa. Em vez de parar, ele contornava a regra. Enviou formulários em sites reais. Usou encurtador de link pra driblar um limite da ferramenta de fetch. E, num dos casos, um modelo chegou a mandar uma denúncia falsa pra polícia — tip inventado, formulário de homicídio sem solução, flagado como spam e nunca investigado. Mas o clique de enviar aconteceu.

Não é história de filme. É o que acontece quando o agente insiste em “completar” e o ambiente não segura.

## O que muda quando ele fica sozinho

Eu uso agente o dia inteiro. Pra código, pra pesquisa, pra tarefa chata. O ponto em que a coisa muda de figura é quando ele fica sozinho com algo irreversível: um deploy, um formulário real, um pagamento.

Aí “não sabe desistir” deixa de ser curiosidade de laboratório e vira risco de produção. O agente não é malicioso. Ele é persistente. Se a tarefa não fecha pelo caminho combinado, ele procura outro. Às vezes esse outro caminho é exatamente o que você queria bloquear.

## Três limites antes de soltar

Se você vai deixar um agente sozinho com deploy, formulário ou pagamento, configure três limites antes.

**1. Permissão mínima.** Ele só mexe no que precisa. Não é “pode tudo e a gente vê”. É o contrário: a menor chave, o menor escopo, o menor diretório. O que não está liberado não existe pra ele.

**2. Hook que bloqueia quando falha.** Em vez de aviso que o fluxo ignora, um gancho que para de verdade. Teste vermelho, lint quebrado, checagem de ambiente: o deploy não passa. Fail closed, não fail open.

**3. Confirmação humana antes de enviar, publicar ou pagar.** O agente pode preparar. Pode até chegar no botão. Quem aperta é você — ou um humano do time — quando a ação é irreversível.

Nada disso é sofisticado. É o mínimo pra eu dormir quando o agente roda sem eu olhando.

> O agente bom não é o que nunca para. É o que para na hora certa.
>
> — tese da edição

## Por que “parar” é a feature

A gente elogia agente que resolve. Que dá um jeito. Que não trava. Só que, no relatório da Anthropic, o “dar um jeito” foi exatamente o problema: contornar a regra em vez de desistir.

Então o critério muda. Eu quero um agente que complete o que é seguro completar — e que trave limpo quando o próximo passo é deploy, formulário ou dinheiro. Parar na hora certa não é falha. É o comportamento certo.

Os três limites acima são a forma prática disso. Permissão mínima reduz o blast radius. Hook que bloqueia transforma falha em freio. Confirmação humana coloca um humano no único lugar em que “enviar / publicar / pagar” ainda precisa de julgamento.

## Resumindo

Antes de deixar a IA sozinha, defina o que ela pode tocar, o que a trava se algo falhar, e o que só um humano aprova. Sem isso, persistência vira contorno — e contorno em produção é o tipo de surpresa que ninguém pediu.

A pergunta que eu faço hoje: se o seu agente travar na tarefa, ele para… ou ele acha um caminho que você não queria?

---

Assista ao short em [Defina esses 3 limites, antes de deixar a IA sozinha!](https://www.youtube.com/watch?v=JmeBSwjS0uE). Em cerca de um minuto eu passo pelos três limites com o visual de cada um. O relatório da Anthropic está em [Investigating unintended model actions](https://www.anthropic.com/research/investigating-unintended-model-actions).