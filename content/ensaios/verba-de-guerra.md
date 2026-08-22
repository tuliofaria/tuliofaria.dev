---
n: 2
title: "Verba de guerra: como parar de travar no custo e aprender uma tecnologia nova"
excerpt: "Passei dois meses sem sair do lugar tentando aprender a gerar conteúdo com IA de graça. O que destravou foi definir três recursos: dinheiro, tempo e consistência."
tags:
  - ia
  - aprendizado
date: 22 ago 2026
read: 9 min
---

Existe um tipo específico de travamento que quase todo mundo que trabalha com tecnologia já viveu: você quer aprender uma coisa nova, senta para testar, esbarra no custo da ferramenta e volta a procurar um jeito de fazer aquilo de graça. Uma versão open source. O modelo mais barato. A API direto do provedor, que parece dar mais controle. Comigo isso durou dois meses.

## O problema não era o dinheiro

Eu queria aprender a gerar conteúdo visual com IA: vídeo, imagem, personagem. E toda vez que eu ia testar, acontecia a mesma coisa. A ferramenta cobrava R$ 50, R$ 100, e eu recuava. Fui testar geração de imagem e quis fazer tudo direto pela API do Google, porque achava que teria mais controle. Fui testar áudio e travei nos R$ 50 do Suno. Fui testar voz e travei no ElevenLabs. Sempre a mesma frase na cabeça: "deve ter um jeito bom de fazer isso de graça". Foram dois meses sem progredir. Não por falta de tempo, não por falta de ferramenta, mas por causa de uma restrição que eu mesmo criei.

## Os três recursos

O que destravou não foi uma ferramenta melhor. Foi parar e definir três coisas antes de continuar.

A primeira é o recurso financeiro: quanto eu posso investir de forma que, se eu perder esse dinheiro, não vou ficar chateado. No meu caso, R$ 500 por mês. O valor em si não importa, pode ser R$ 100, pode ser R$ 20. O que importa é existir um número definido. Foi aí que veio a virada: esse dinheiro deixou de ser despesa e passou a ser verba de teste, verba de aprendizado. Quando uma ferramenta pedia 5 dólares de crédito, eu não pensava mais, porque já estava dentro do que eu tinha combinado comigo mesmo.

A segunda é o recurso de tempo: quando exatamente eu vou fazer isso. Antes, meus testes eram esparsos, um dia num horário, outro dia em outro. Passei a reservar uma hora e meia todo sábado de manhã, entre 10h e 11h30, que era o horário em que eu estava mais tranquilo.

A terceira é a consistência: com que frequência isso se repete. No meu caso, todo sábado, sem exceção. Quando eu não terminava o que queria testar, pulava para o sábado seguinte, e tudo bem. Com os três definidos, fica muito mais fácil estabelecer o que você considera "feito" para aquele objetivo.

## Defina o objetivo antes da verba

Esse é o ponto que separa investir de queimar dinheiro. O meu objetivo era gerar conteúdo visual com IA que não tivesse cara de IA, a ponto de eu não ter vergonha de publicar aquilo como anúncio de verdade. É um critério qualitativo, e eu normalmente não recomendo metas assim, porque você não consegue responder sim ou não com clareza. Mas ele funcionou porque tinha um teste prático embutido: eu publicaria isso?

## A conta que quase ninguém faz

Se você calcular quanto custa a sua hora de trabalho, vai chegar a uma conclusão desconfortável. No meu caso, os R$ 500 custavam bem menos do que a minha hora. Trabalhando para o exterior, custa mais que isso.

> Eu estava gastando o recurso caro para economizar o recurso barato.
>
> — tese da edição

Dez horas pesquisando uma forma gratuita custam muito mais do que a verba de aprendizado inteira. O tempo quase sempre é o recurso mais caro, só que ele não aparece na fatura, então é fácil fingir que é de graça. Isso obviamente depende da situação financeira de cada um. Mas, na dúvida, o tempo ganha.

## O termômetro: compartilhe cada ciclo

Ao final de cada sessão de sábado, eu mandava o resultado para um sócio ou para um amigo. Não falava do experimento, nem da verba, nem de quanto tinha gastado. Só queria a reação crua: o que você achou disso aqui? Foi assim que fui aprumando as coisas até conseguir publicar de verdade. Ter alguém que te mantém a conta boa vale mais do que qualquer métrica que você invente sozinho.

## O que saiu do outro lado

O primeiro resultado foram anúncios em formato UGC. Gerei um personagem a partir do perfil do consumidor típico do meu produto, usando bastante o Claude para desenhar essas características: um dono de pizzaria com olheira porque trabalha até de madrugada, por exemplo. Pinceladas, nada muito marcante. A pessoa não existe, mas o criativo virou anúncio de verdade e converteu bem. O vídeo foi gerado no Higgsfield, e a edição resolveu os detalhes, como um overlay para disfarçar um erro de continuidade.

Depois veio a voz. O que mais entrega que um vídeo é IA não é a imagem, é que todas as vozes são iguais. Clonei a minha voz no ElevenLabs. Como é a minha, eu sei exatamente onde ela está sendo usada, e não liberei para mais ninguém. O fluxo ficou assim: gero o vídeo, pego o áudio, volto ao ElevenLabs e faço um voice changer trocando para a minha voz. O vídeo continua sincronizado, que é o maior desafio de qualquer dublagem, porém com a minha voz. Funcionou em inglês também, e ficou ligeiramente com o meu sotaque, o que ajuda: parece realmente que sou eu falando.

A parte de montagem virou código. Pedi para o Claude gerar os scripts que produzem as imagens, as legendas e o vídeo com Remotion, para eu conseguir renderizar depois. Com isso, dá para gerar a versão horizontal, vertical, shorts ou o vídeo completo a partir da mesma base. E ele ainda equilibra imagens estáticas com B-roll nas transições entre cenas.

Um macete que economiza horas: se você tentar gerar o áudio de uma vez só, a voz vai degradando e chega a virar ruído. Esticar para um minuto já é muita coisa. A solução foi pedir para o Claude gerar arquivinho por arquivinho, um pedacinho de áudio para cada trecho do vídeo, e depois o script junta tudo.

## Um gerador de aulas de programação

Esse foi o teste que mais me surpreendeu. Quis saber se a mesma estrutura funcionaria para explicar código. Montei um projeto do zero, com um cliente Vite, uma API Express e um banco Postgres. Tudo o que acontece dentro do vídeo é gerado, não é a minha tela. O Claude criou também o esquema de scripts e containers.

A única coisa que eu preciso escrever para gerar uma aula dessas é um Markdown: curso, título, idioma, layout, as cenas em sequência, os trechos de código e o que vai ser falado. Isso deixa a geração bem mais previsível. O workspace guarda os momentos-chave da aula e salva o estado exato dos arquivos em cada um deles, então quem assiste consegue voltar para "o momento de criar a conexão com o banco" e ver como o código estava naquele ponto. E como tudo parte do Markdown, dá para traduzir o arquivo e gerar a mesma aula em outros idiomas, com a mesma voz.

## Duas dicas para o personagem não ter cara de IA

Peça uma pessoa imperfeita no prompt. Não queira 100%. Peça pequenos detalhes, pequenas imperfeições. É isso que faz quem assiste acreditar que não é IA.

E evite características muito marcantes. Um erro comum é pedir uma tatuagem no braço, e manter isso estável entre gerações é muito mais difícil do que manter uma barba. Escolha traços que o modelo consegue reproduzir com consistência.

## Quando essa estratégia não faz sentido

Quando você não tem um objetivo claro. Sem direção, você vai testar qualquer coisa e queimar a verba à toa. O próximo passo tem que te levar àquele objetivo específico. Aí sim fica evidente que aqueles R$ 500, ou R$ 100, ou R$ 20, ou R$ 5, estão te aproximando do resultado que você quer. Verba sem direção é só uma forma mais organizada de desperdiçar dinheiro.

## Como ficaram os investimentos

No começo testei o Fal AI, que permite chamar a API direto. No fim das contas, o que mais ajudou foi usar o Higgsfield com MCP. Depois descobri que o Minimax não é tão caro e, em vez do ElevenLabs, passei a usar o Minimax direto, e inclusive achei o resultado da voz mais interessante.

Uma última coisa que ajuda mais do que parece: eu tenho um cartão separado, com limite baixo, só para isso. Ele se chama "Experimentos de IA". Assim eu faço os testes sem misturar com o resto e sem risco de quebrar a banca.

## Resumindo

Se você está patinando para aprender alguma coisa e tem algo enroscando, seja custo ou qualquer outra coisa, defina os recursos antes de continuar tentando. Quanto tempo você tem? Quanto dinheiro você tem disponível para investir? Com que consistência você vai fazer isso?

Defina uma verba de guerra e aprenda sem dó. O seu tempo é mais caro do que a assinatura que você não quer pagar.

---

Assista ao vídeo completo em [Verba de guerra](https://www.youtube.com/watch?v=tIr-pBTVsp8). Lá eu mostro cada um desses resultados na tela: os anúncios, o vídeo em inglês, o gerador de aulas rodando e a mesma aula em espanhol.
