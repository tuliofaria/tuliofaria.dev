---
n: 4
title: "Se a resposta não for sim ou não, você não tem um objetivo"
excerpt: "Dei um objetivo para o Claude Code e fui embora. 53 minutos depois ele tinha batido 100 no PageSpeed em quatro páginas. O interessante não foi o resultado. Foi o que o harness me obrigou a definir antes."
tags:
  - produtividade
  - ia
date: 5 set 2026
read: 8 min
---

Rodei um `/goal` no Claude Code pedindo uma coisa só: iterar até todas as pontuações do PageSpeed ficarem em 100, na home, no blog, em um guia e em um conteúdo do blog de um dos meus SaaS. Deixei rodando e fui fazer outra coisa.

Cinquenta e três minutos depois ele tinha batido 100 em performance, acessibilidade, boas práticas e SEO, em mobile e desktop, nas quatro páginas.

O resultado é legal. Não é o ponto deste texto. O ponto é o que eu percebi enquanto aquilo rodava: um objetivo dentro de um harness funciona exatamente igual a um objetivo de vida. E o harness me obriga a fazer uma coisa que quase ninguém faz fora dele.

## O ciclo é sempre o mesmo

Quando você dá um objetivo para o Claude Code, o que acontece é isto. Ele faz alguma coisa. Checa se aquilo foi alcançado. Se não foi, volta e tenta de novo. Fica nesse ciclo até conseguir.

Agora troque "ele" por "você" e diga em que isso é diferente de perder peso, aprender a programar ou melhorar o inglês. É o mesmo ciclo. Faz, mede, repete.

A diferença está no passo da medição. O Claude Code não consegue rodar sem ele. Você consegue. E é exatamente por isso que dá para passar seis meses "melhorando o inglês" sem saber se melhorou.

## A pergunta precisa responder sim ou não

Para o ciclo funcionar, a pergunta do meio precisa admitir uma única resposta: sim ou não. Não vale falar que está 80%. Não vale "está quase". Não vale "acho que estou evoluindo".

Repare no que acontece quando você aplica isso aos objetivos que a gente costuma escrever. "Quero criar um SaaS": o que é o seu SaaS estar feito? O que é estar pronto? O que é lançar? "Quero emagrecer": até quanto? Qual é o peso que responde sim? "Quero ganhar mais": qual é o valor? O que exatamente isso vai te permitir fazer? "Quero trocar de emprego": por qual motivo? Se for salário, até onde você vai na negociação? Se for ambiente, o que caracteriza um ambiente saudável para você?

Em todos os casos, o que você tinha antes era uma intenção, não um objetivo. Não tinha o passo que mede. E sem esse passo você não roda um ciclo. Você se movimenta e torce.

> Sem uma pergunta que responda sim ou não, você não tem um objetivo. Tem uma intenção.
>
> — tese da edição

## O exemplo real, do início ao fim

O prompt que eu mandei foi basicamente este: use o browser-harness para rodar os testes de performance em web.dev/measure no meu site e itere até todas as pontuações ficarem em 100. Faça isso para a home, o blog e pelo menos um guia e um conteúdo do blog.

O critério de parada está explícito e é binário. Todas as pontuações em 100? Não: itera de novo. Todas em 100? Não: itera de novo.

Ele passou por seis versões até chegar lá. E fez uma coisa que eu achei ótima: rodou a mesma página várias vezes. Não porque estava perdido. Porque ele sabe que a medição do PageSpeed varia entre execuções. Então esperou estabilizar antes de considerar o critério atingido.

Esse detalhe separa um critério bom de um critério ingênuo. "Bateu 100 uma vez" não é a mesma coisa que "bate 100 de forma consistente". Um modelo que conhece o domínio sabe disso. Uma métrica mal definida não.

No fim: 100 nas quatro categorias, nas quatro páginas, em mobile e desktop. Uma coisa que antigamente dava bastante trabalho.

## As ferramentas que eu usei

Eu estava na interface do T3 Code, mas por baixo é Claude Code. O `/goal` é dele. O Browser Harness é o que dá acesso ao navegador de verdade: você copia o prompt do site deles, cola no harness e ele se instala. A medição em si veio do web.dev/measure, a URL curta do PageSpeed.

O que me ganha no Browser Harness é que ele usa as abas que já estão abertas no seu navegador. Consegue saber quais abas e quais perfis estão abertos e gerenciar isso. Não preciso criar um grupo de abas específico como na extensão do Claude para o Chrome. Por baixo ele conversa com o Chrome no mesmo protocolo do Playwright. Na prática, o Claude escreve shell e Python e manda o harness executar.

Não é perfeito. Às vezes ele não percebe que a aba já está aberta e vai abrindo outras. E tem um incômodo real: ele rouba o foco do navegador o tempo inteiro. Se você estiver trabalhando em outro perfil, ele puxa o foco de volta. Por isso eu rodo esse tipo de teste em outra máquina. Deixo o trabalho fluindo lá e continuo usando a minha normalmente.

## O ponto que quase ninguém define

Aqui está a parte mais importante do texto, e a que menos tem a ver com IA.

Você definiu o objetivo. Definiu o critério de parada. Falta uma coisa: quantas vezes você vai repetir o loop antes de desistir?

Se você está tentando vender o seu SaaS, você está em um loop. Prospecta, apresenta, não fecha, volta. Quantas vezes você vai rodar isso antes de mudar de estratégia ou parar?

Se você não decidir isso antes, quem decide é a dificuldade. E aí você para no pior momento possível: por cansaço, num dia ruim, e não por uma decisão que você tomou com a cabeça fria.

Essa é uma conversa importante de ter com você mesmo e, principalmente, com o seu sócio, se você tiver. Até quando a gente vai testar isso? Qual é o número em que a gente para? Qual é o número que diz que a gente alcançou?

Definir isso antes não é pessimismo. É a única forma de a decisão de parar, ou de continuar, ser sua, e não do cansaço.

## Objetivo geral não basta

O problema quase nunca é não ter objetivo. É ter só o objetivo geral.

"Melhorar o inglês" é ótimo como direção e inútil como critério, porque não existe uma pergunta com resposta sim ou não em cima dele. O que falta é a definição. O que é melhorar o inglês? Passar num teste específico? Conseguir fazer uma reunião de 30 minutos sem travar? Assistir a uma palestra sem legenda?

Escolha qualquer uma dessas e você ganha o passo que mede. Sem escolher nenhuma, você fica rodando eternamente sem saber se está progredindo. Isso é bem pior do que não ter começado, porque consome energia e dá a sensação de movimento.

## Resumindo

Seja no Claude Code, seja no Codex, seja na vida: defina o objetivo, a direção geral. Defina o critério de parada, a pergunta que responde sim ou não. Defina quantas iterações você aceita antes de desistir.

Sem o critério, você não tem um objetivo, tem uma intenção. Sem o limite de iterações, quem decide quando parar é a dificuldade.

E se você acha que isso é rigor demais para a vida real, lembre-se: é exatamente o que a gente exige de uma máquina antes de deixá-la trabalhar sozinha por 53 minutos.

---

Assista ao vídeo completo em [Definindo objetivos](https://www.youtube.com/watch?v=s9InqgabNzg). Lá eu mostro o goal rodando de ponta a ponta, as medições página por página e o resultado final na tela.
