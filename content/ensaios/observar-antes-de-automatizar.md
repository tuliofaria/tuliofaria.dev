---
n: 16
title: "Observar antes de automatizar"
excerpt: "Todo mundo quer colocar um bot no WhatsApp. Eu acho que o primeiro passo é outro: enxergar como o seu time já responde hoje, quanto demora e se segue o jeito que você combinou."
tags:
  - negócios
  - ia
  - ferramentas
date: 2 nov 2026
read: 5 min
---

Quase toda conversa que eu tenho sobre WhatsApp e atendimento começa no mesmo lugar: como colocar uma IA pra responder. É uma pergunta justa. Mas eu percebi que ela costuma pular uma etapa.

Antes de automatizar o atendimento, você sabe como o seu time responde hoje? Quanto tempo o cliente espera pela primeira resposta? Quantas mensagens ficam sem retorno? A pessoa do outro lado está seguindo o jeito de atender que vocês combinaram?

Na maioria das empresas pequenas que eu conheço, ninguém sabe. O atendimento acontece no celular de alguém, no app do WhatsApp Business, e o que acontece ali some.

## O que não se vê não se melhora

O problema de automatizar sem olhar é que você automatiza um processo que não conhece. Se o gargalo é o tempo da primeira resposta, um bot resolve. Se o problema é que ninguém pergunta o que o cliente precisa antes de mandar o preço, um bot só repete o erro mais rápido.

E tem um custo que pouca gente conta: trocar o jeito de atender mexe com o time. Tirar a pessoa do celular, mudar a ferramenta, colocar um robô na frente. Às vezes vale. Mas é uma decisão grande pra tomar no escuro.

## Um app que só observa

Foi isso que me levou a fazer o Conversation Analyzer, um app de exemplo open source em cima do PipesBot. A ideia dele é bem simples: ele conecta um número do WhatsApp Business e só observa. Nunca manda mensagem.

O time continua respondendo do app no celular, do jeito que sempre fez. Por causa da coexistence, as respostas enviadas do telefone também chegam como webhook (`smb_message_echoes`), então o app enxerga os dois lados da conversa: o que o cliente mandou e o que o time respondeu.

Com isso dá pra tirar, por conversa, o tempo da primeira resposta, o tempo médio de resposta e quantas vezes o cliente ficou falando sozinho. E, com uma chave do OpenRouter, uma nota de IA que diz se o atendimento seguiu a metodologia que você definiu.

Ninguém precisou mudar de ferramenta pra isso acontecer.

> Antes de colocar uma IA pra responder, coloque uma pra observar. Você só consegue automatizar bem o que já consegue enxergar.
>
> — tese da edição

## O que muda quando você enxerga

Quando o número aparece, a conversa com o time muda. Deixa de ser "acho que estamos demorando" e vira "a primeira resposta está levando tanto tempo nesse horário". Deixa de ser opinião sobre o jeito de atender e vira uma nota, conversa por conversa, contra um critério que todo mundo conhece.

E a decisão de automatizar fica melhor. Talvez você descubra que o time responde rápido e bem, e o que falta é só cobrir a madrugada. Talvez descubra que o problema é uma etapa específica da metodologia que ninguém segue. Aí sim você sabe o que o bot precisa fazer, e consegue medir se ele fez melhor do que a pessoa.

Observar também tem uma vantagem que eu gosto muito: é reversível. Não muda nada pro cliente, não muda nada pro time. Se não servir, você desliga.

## Resumindo

A vontade de automatizar o WhatsApp é grande, e faz sentido. Mas o primeiro passo que eu recomendo é mais modesto: medir como o atendimento acontece hoje. Tempo de primeira resposta, tempo médio, mensagens sem retorno e se o time segue o jeito combinado.

Com isso na mão, automatizar deixa de ser aposta e vira uma decisão com base no que você viu.

Fica a pergunta: você sabe quanto tempo o seu cliente espera hoje pela primeira resposta?

---

Assista ao vídeo em [Monitor Your Team's WhatsApp Replies (Response Time + AI Score) | PipesBot](https://www.youtube.com/watch?v=Taw8-UpMCwk) (em inglês). Lá eu mostro o app conectando um número, uma resposta mandada do WhatsApp Business no celular e as métricas aparecendo. O código está em [pipes-bot-examples/conversation-analyzer](https://github.com/pipes-bot/pipes-bot-examples/tree/main/conversation-analyzer).
