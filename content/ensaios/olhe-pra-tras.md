---
n: 3
title: "Olhe pra trás: o problema não é produtividade"
excerpt: "Mil abas, vários terminais com Claude e Codex, e a sensação de estar exausto sem ter feito nada. O que destravou foi parar de olhar só pra frente."
tags:
  - produtividade
  - ia
date: 31 ago 2026
read: 8 min
---

Mil abas abertas. Um monte de terminal com Claude, ChatGPT e Codex rodando. E no fim do dia aquela sensação familiar: estou exausto e não fiz nada. Se isso te parece a sua semana, o problema quase nunca é falta de ferramenta de produtividade. É o tamanho do que você tentou empurrar, e o hábito de só olhar pra frente.

## Objetivos grandes demais

A primeira causa é simples de reconhecer e difícil de admitir. O projeto está no ClickUp como um bloco único: "fazer o produto", "subir a landing", "organizar o SaaS". Isso não é tarefa. É um semestre disfarçado de checkbox.

O que funciona pra mim é quebrar até o pedaço caber em um ou dois pull requests. Se a tarefa não fecha num PR, ela ainda é grande demais. Um PR tem começo, fim e um diff que alguém consegue ler. A cabeça agradece, porque o cérebro entende "feito" quando tem um pacote pequeno pra empurrar, não quando tem um horizonte.

Isso sozinho já reduz a canseira. Mas não resolve a outra metade.

## A gente só olha pra frente

Mesmo com tarefa pequena, o olhar continua no próximo item. O que já foi pro ar some. Semana passa, você esquece o que mergeou, o que publicou, o que o time já está usando. Aí vem a mentira: "não andei nada". Andou. Só não olhou.

> A canseira some quando a gente conta o que já foi pro ar, não quando planeja o próximo passo.
>
> — tese da edição

Eu não monto um segundo cérebro pra isso. O histórico já está no GitHub. Cada PR é um ponto na linha do tempo, por organização, por repositório, com data. Se eu já entreguei, está lá. Não preciso recontar de memória.

## GitHub CLI, de qualquer sessão

O jeito prático: no terminal, numa sessão do Claude, eu peço pra ele usar o GitHub CLI e me devolver o que eu movi. Quais PRs saíram nos últimos 7 dias. Nos últimos 14. Nos últimos 30. Sem abrir o repositório no editor. Sem caçar branch. De qualquer máquina em que o `gh` esteja logado.

A estrutura que volta é o que importa. Não é uma lista crua de título. É: o que mudou, em qual projeto, em qual organização, o que isso desbloqueou. Dá pra filtrar por org quando você tem várias. Dá pra filtrar por aquele projeto que ficou de lado e você jura que abandonou. Muitas vezes ele não foi abandonado. Teve um PR três semanas atrás e você esqueceu.

Quando um projeto parado precisa voltar, esse recorte é o contexto. Você não começa do zero. Você pega o que já foi entregue e continua.

## O mesmo recorte vira texto

Isso não serve só pra se sentir menos culpado.

Se eu preciso descrever a funcionalidade pra uma landing, o material já está nos PRs. O Claude lê o que entrou e escreve o parágrafo sem eu ter que relembrar cada commit. Se o time pergunta o que saiu na semana, o mesmo recorte vira um resumo formatado pra colar no WhatsApp. Não é status theater. É o que realmente foi pro ar, na linguagem de quem vai usar.

## Por que eu faço na mão, e não um agente

Dá pra automatizar. Um agente rodando toda segunda, digest no Slack, card no ClickUp. Eu não fiz isso de propósito.

Tem um prazer específico em riscar a tarefa no papel, em pedir o recorte e ler o que voltou. Quando você monta o agente, some essa microvitória. O relatório chega, você nem abre, e a sensação de "eu conferi o que fiz" não acontece. Pra esse uso, a sessão na hora que a canseira bate vale mais do que o robô que você ignora.

Automatiza o que você já faz toda semana sem pensar. Isso aqui eu quero continuar pedindo.

## Vale pra carreira também

A mesma lógica cabe fora do código. Você pode abrir uma sessão e pedir pro Claude te entrevistar: o que mudou nos últimos 90 dias, o que você entrega hoje que não entregava no começo do ano, onde você só está ocupado. Não é um teste. É um espelho. Quase sempre a estagnação que a gente sente é falta de recorte, não falta de evolução.

## Por que GitHub, e não um caderno paralelo

Eu toco várias frentes ao mesmo tempo. Oito projetos não cabem num Notion que eu prometo atualizar. O GitHub já é atualizado porque o trabalho passa por ele. Se a fonte da verdade é o PR, eu não dependo de disciplina extra pra ter histórico.

Caderno paralelo só funciona se você escrever nele todo dia. Eu não escrevo. Eu mergeio. Então o merge é o diário.

## Resumindo

Se a semana te deixou cansado e com a impressão de que nada andou, não começa comprando outro app de hábito. Quebra o que está na frente até caber num PR. Depois olha pra trás, nos últimos 7, 14, 30 dias, e lê o que já foi pro ar.

A produtividade que falta quase sempre já aconteceu. Você só não tinha um jeito barato de ver.

---

Assista ao vídeo completo em [Cansado e com a sensação de que não fez nada?](https://www.youtube.com/watch?v=TjDmm97qDRg). Lá eu mostro os pedidos no GitHub CLI, o filtro por organização e por projeto, e o recorte virando texto de landing e de WhatsApp.
