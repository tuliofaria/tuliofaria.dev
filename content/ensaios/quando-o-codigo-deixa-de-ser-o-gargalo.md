---
n: 14
title: "Quando o código deixa de ser o gargalo"
excerpt: "Em março eu abri uns 40 PRs nos meus side projects. Em outubro, em uns 15 dias de trabalho, foram 197. O código parou de travar, e a conta do CI/CD chegou."
tags:
  - ia
  - claude-code
  - produtividade
date: 25 out 2026
read: 7 min
---

Em março de 2026 eu abri mais ou menos 40 PRs nos meus side projects. Em outubro, contando até o dia 22 e descontando uma semana de férias em que eu praticamente não mexi em nada, foram 197. Uns 15 dias de trabalho.

Parece só uma boa notícia. Mas teve uma consequência que eu não estava esperando: a conta. Estourei os build minutes do GitHub Actions e da Vercel. No mês anterior eu gastei menos com o plano da Vercel do que com os build minutes dela.

Eu quero registrar aqui o processo, como prometi no vídeo, e o que eu aprendi quando o gargalo mudou de lugar.

## O fluxo de hoje

Tudo que eu faço começa do mesmo jeito. Eu escrevo uma spec, o agente implementa e abre um PR. Aí entra o review automático: o CI rodando testes e lint, o CodeRabbit e o Grok Bot, que também é meu reviewer. Eles deixam comentários, o agente corrige, volta pro review, e o ciclo se repete até fechar.

Até o mês passado, esse ciclo era manual. O review voltava, eu ia na sessão do Claude Code que tinha feito a spec e pedia pra ele olhar os comentários e responder. De novo. E de novo.

E tinha um detalhe que me atrasava muito. Quando o volume de PRs subiu, o CodeRabbit começou a bater rate limit. Ele travava e ficava esperando alguém comentar `@coderabbitai review` no PR pra começar de novo. Esse alguém era eu.

## Eu era o proxy da IA

Foi olhando pro meu próprio uso que eu percebi o problema. Nesse fluxo inteiro, o único momento em que eu preciso olhar de verdade é antes do merge. O resto era eu repassando recado: pedir pra revisar, pedir pra corrigir, pedir pra repetir. Eu estava servindo de proxy entre a IA e as ferramentas.

Então eu escrevi umas skills no Claude Code pra fazer esse papel. Quando eu executo uma spec, a skill já roda com subagents, abre o PR, fica monitorando o review por bastante tempo e respondendo os comentários. Quando acaba, eu vejo no T3 Code que aquela sessão está esperando por mim.

No fim, ela ainda me entrega um passo a passo de como testar aquilo localmente ou numa preview URL. Eu só entro no final. E isso deixa o Claude Code trabalhando duas, três, quatro horas e me trazendo um PR pronto pra merge, enquanto eu estou no meu trabalho.

Uma dica: você pode pedir pro próprio Claude criar essas skills. Mas elas precisam refletir o seu processo, não o meu.

## Um loop local antes de gastar build minutes

Com mais PRs, cada push novo disparava GitHub Actions e preview na Vercel. Eu precisava de uma checagem antes disso.

Aí entrou o cross-review. Antes de abrir o PR, o agente pede pra outro agente revisar tudo que ele alterou naquela worktree. Se a sessão é do Claude Code, ele chama o Codex. Se é do Codex, chama o Claude Code. Esse loop gira na minha máquina, sem consumir minuto de ninguém, e o resultado fica registrado no corpo do PR. Assim eu sei que aquele PR já passou por esse nível de revisão.

O efeito colateral foi bom pro CodeRabbit também. Antes, muita coisa que podia ter sido pega antes ia parar nele. Com o cross-review na frente, ele começou a pegar os bugs chatos de verdade, os que passaram pela primeira revisão.

E como a spec também vai no PR, em markdown, o agente que implementou sabe o que foi decidido. Muitas vezes ele responde um comentário dizendo que aquilo não é bug, é decisão da spec.

## A conta chega

Mesmo com tudo isso, o CI/CD virou o gargalo. Eu não podia simplesmente tirar o CI, porque o processo inteiro depende dele. Sem CI, o risco sobe.

A primeira coisa foi testar o Blacksmith num projeto. Ele é um pouco mais rápido e um pouco mais barato que o GitHub Actions. Mas eu continuei intrigado.

Aí eu lembrei que tenho máquinas boas paradas em casa. Conforme o escritório virou home office, um monte de máquina com placa de vídeo veio pra cá, já rodando Ubuntu. Instalei o runner do GitHub Actions nelas. São poucas linhas de shell script, e a página do GitHub explica.

O próximo passo é colocar o Mac mini fazendo o CI/CD de Mac também, que no GitHub Actions é mais caro.

## O plano B

Só que eu não tenho um data center em casa. A internet pode cair, a energia pode cair, e às vezes eu não estou aqui pra consertar.

Por isso cada workflow tem um seletor. Ele pergunta pra API do GitHub se o meu runner está online. Se estiver, o trabalho roda na minha máquina. Se não, vai pro GitHub Actions como fallback. O seletor também é uma action, mas gasta uns 10 segundos pra decidir, em vez dos minutos de teste que ele delega.

E se alguma coisa der problema enquanto estou fora, eu consigo abrir sessão pelo celular com o T3 Code e o Tailscale.

Pras preview URLs da Vercel, estou desabilitando aos poucos. A ideia é que elas sejam disparadas pelo runner local. Ainda está em andamento.

> Quando você acelera uma parte do processo, o gargalo não some. Ele muda de lugar. O trabalho é olhar pra onde ele foi.
>
> — tese da edição

## O que eu levo disso

Isso acontece em qualquer fluxo. Se o seu time começa a gerar mais PRs, provavelmente o review entre colegas vira o ponto que trava. No meu caso, o processo inteiro é review e preview, então foi ali que a pressão caiu.

A primeira lição é avaliar o seu processo. Eu só consegui entregar mais quando parei pra olhar o que eu fazia, e boa parte era eu sendo o proxy da IA.

A segunda é colocar tudo na spec: como checar, o que pode e o que não pode, como testar. O ideal é a IA perguntar o máximo antes, na spec, ou decidir e me contar depois. No meio, ela não deveria precisar de mim.

A terceira é rodar o processo com subagents, pra economizar contexto.

Eu ainda não uso auto-merge. É o próximo passo: escrever só a spec e ter guardrails suficientes pra o merge sair sozinho. Não cheguei lá, mas está perto.

E por mais que eu tenha ficado meio chateado com os build minutes, é um problema bom. Estou entregando mais.

## Resumindo

De uns 40 PRs em março pra 197 em uns 15 dias de outubro. O que mudou foi tirar a mim mesmo do meio do loop de review, com skills que executam a spec, abrem o PR, acompanham CI, CodeRabbit e Grok Bot e respondem sozinhas.

Um cross-review local entre Claude Code e Codex antes de abrir o PR poupa build minutes e deixa o CodeRabbit pros bugs que importam. Pra conta do CI, Blacksmith num projeto, runner do GitHub Actions nas minhas máquinas e fallback pra nuvem quando elas estão offline.

E a pergunta que fica pra você: depois que o código deixou de ser o gargalo, onde está o seu?

---

Assista ao vídeo completo em [De 40 para quase 200 PRs por mês: o CI/CD virou meu gargalo](https://www.youtube.com/watch?v=IbsYa_7PvG0). Lá eu mostro o gráfico de PRs de 2026, o fluxo de spec, PR, review e fix, o cross-review entre Claude Code e Codex, os build minutes da Vercel e do GitHub Actions, o Blacksmith e o seletor de runner com fallback.
