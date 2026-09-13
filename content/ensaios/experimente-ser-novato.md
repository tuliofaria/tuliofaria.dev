---
n: 8
title: "Experimente ser novato: deixe o modelo conduzir"
excerpt: "Mandei uma foto do estúdio antigo do DevPleno pro ChatGPT e fiquei perguntando só 'qual o próximo passo?'. Ele montou a cena no Blender, refinou o personagem no Higgsfield e exportou Three.js. A lição não foi o Blender."
tags:
  - ia
  - aprendizado
date: 13 set 2026
read: 8 min
---

Tem uma dica numa entrevista do Boris, criador do Claude Code, que ficou na minha cabeça: de tempos em tempos, volte e tente de novo aquilo que um modelo não conseguiu fazer direito antes. Foi daí que saiu esse experimento.

Eu resolvi fazer o oposto do que todo mundo ensina. Em vez de escrever o prompt perfeito, fingi que era um usuário que não sabe o que está fazendo.

## O teste: parecer iniciante de propósito

Mandei para o ChatGPT uma foto do meu estúdio antigo do DevPleno. Depois um vídeo caminhando pelo espaço. Depois a medida de um painel. E daí em diante só perguntei uma coisa: "qual o próximo passo?"

O objetivo era claro e pequeno: colocar aquela cena no site com Three.js. Eu não desenhei o fluxo. Não abri o Blender. Não escrevi o script. Só respondia o que ele pedia.

Ele conduziu tudo. Pediu mais fotos e as medidas aproximadas. Devolveu uma pré-visualização. Se localizou em 3D a partir do vídeo. E começou a construir a cena no Blender.

## Não foi por MCP. Foi por loop

A integração com o Blender não veio por MCP. Ele escreveu script Python e mandou executar lá dentro. Renderizava. Olhava o próprio render. Comparava com a referência. Rodava de novo. Em loop, até ficar visualmente próximo.

Esse detalhe importa mais do que parece. O modelo enxerga o resultado do próprio trabalho e corrige. Não é "gera e torce". É "gera, mede contra a foto, gera de novo".

Houve um handoff para o modo Work, que usa o Codex. Os primeiros testes dentro do Blender foram toscos. A cada ciclo ficava melhor. Incluí o personagem (eu) na cena. Aí veio a limitação.

## Quando o personagem virou um bonecão

Eu virei um bonecão. Camiseta errada. Plaquinha da Conta49 ilegível. A saída não foi insistir no mesmo prompt com mais adjetivos. Foi trocar de ferramenta.

Chamei o Higgsfield por MCP só para refinar o personagem. A diferença foi absurda: a camiseta ficou precisa, a plaquinha ficou legível. Fiz pente fino nos quadrinhos e nos outros elementos. No fim, ele exportou tudo para HTML com Three.js: zoom, variações e controle de luz rodando no navegador.

[Explore o estúdio em 3D](/projetos/estudio-3d/): gire a cena, aproxime os detalhes e experimente os controles de luz no navegador.

Sobrou errinho de posicionamento. Dava para abrir a cena inteira no Blender e ajustar. Mas o ponto já estava feito: a cena existia, navegável, sem eu ter dominado a ferramenta.

> Dá para entregar coisa boa numa ferramenta que você não domina. Quando bater numa limitação, troque de ferramenta — não insista no prompt.
>
> — tese da edição

## A lição não é o Blender

Eu nunca tinha usado o Blender de verdade. Mesmo assim saiu um resultado que dá para mostrar. E dá para ir além: jogo, portfólio 3D, até a ideia de um projeto arquitetônico navegável no navegador.

Dava para gerar o modelo inteiro pelo Higgsfield. O Claude, em outros momentos, usava o Blender Bridge do Higgsfield. No meu caso, o ChatGPT/Codex fez o caminho pelo script Python. Ferramentas diferentes, mesma lógica: o modelo conduz, você só destravar o próximo passo.

O consumo de tokens entre ChatGPT e Claude muda. Isso importa na conta. Não muda a tese.

## Por que fingir que você não sabe

Quanto mais o modelo evolui, menos você precisa direcionar. Só que a gente insiste em criar viés desde o começo: prompt longo, arquitetura inventada, "faça assim porque eu já sei".

Aí o modelo trabalha dentro da sua caixinha. Se a caixinha estiver errada, ele erra com elegância.

Parecer novato de propósito é o contrário disso. Você dá a chance de o modelo te conduzir e vê onde ele chega. Quando ele bate na parede, você não discute com a parede: troca a ferramenta daquele pedaço específico.

A técnica você masteriza. O produto é consequência.

## Resumindo

Volte e tente de novo o que não deu certo antes. No experimento, isso virou: uma foto, um vídeo, medidas aproximadas, e a pergunta "qual o próximo passo?" até a cena estar no Three.js.

Quando o personagem virou bonecão, o Higgsfield resolveu o pedaço. O Blender ficou com o restante. Eu fiquei com o julgamento de quando trocar.

Experimente ser novato. Dê a chance de o modelo te conduzir. E, se travar, troque de ferramenta antes de trocar de ideia.

---

Assista ao vídeo completo em [Mandei uma foto do meu estúdio pro ChatGPT e ele recriou tudo em 3D](https://www.youtube.com/watch?v=ESNjhncPUw0). Lá eu mostro o loop no Blender, o refinamento no Higgsfield e a cena HTML com Three.js rodando no navegador.
