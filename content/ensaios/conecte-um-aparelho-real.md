---
n: 18
title: "Conecte um aparelho real e peça para o agente explorar o app"
excerpt: "Conectei um Galaxy A14 de verdade e pedi para o agente explorar o app mobile de um dos meus SaaS. Num build de release, o Android não rastreava localização. Esse tipo de falha uma suíte de testes não exercita."
tags:
  - ia
  - agentes
  - ferramentas
date: 15 nov 2026
read: 6 min
---

Conectei um Galaxy A14 de verdade, com Android 14, e pedi para o agente explorar o app mobile de um dos meus SaaS.

O app usa um SDK de localização de terceiros, uma dependência que a gente não controla. Foi aí que estava o problema.

## O que o build de release mostrou

As chaves de licença no app já estavam no formato v5. O SDK ainda estava na 4.19.4, que não consegue validar essas chaves.

Essa checagem não roda num build de debug. Ela roda num build de release do app real. No Galaxy A14, o SDK registrou uma falha na validação da licença, mostrou um toast com esse aviso e recusou funcionar. Ao tocar em permitir no aviso de localização, o prompt do sistema nem abriu. Nos builds de release do Android, o rastreamento não funcionava de jeito nenhum.

Testes do nosso próprio código não exercitam a checagem de licença do fornecedor no id real do app. Uma suíte verde pode esconder um build de loja que simplesmente não rastreia.

![O fluxo: peça para o agente, aparelho real conectado, ele explora o app, encontra o bug, correção e verificação](/images/ensaios/aparelho-real-fluxo-pt.png)

## A correção no mesmo aparelho

O agente atualizou o SDK de 4.19.4 para 5.8.2. A configuração passou para o formato da v5, e um plugin companheiro que não era mais necessário saiu do caminho.

A verificação foi no mesmo Galaxy A14, de novo num build de release, contra um servidor local. A licença passou. O prompt do sistema apareceu. O fluxo de permissão fechou numa passagem só, e o servidor aceitou os pings de localização. Também encerramos o app e deixamos ele fechado: um agendamento o reiniciou, o rastreamento voltou, e os pings foram gravados, sem abrir o app. Uma atualização no lugar, a partir da 4.19.4, trouxe a configuração que já estava salva, com as 73 chaves que estavam persistidas.

A v5 mudou dois comportamentos no Android, e os dois foram conferidos no mesmo aparelho. A primeira permissão agora só concede o uso enquanto o app está em uso. O app passou a pedir de novo no mesmo fluxo, para a pessoa ver o aviso e poder liberar o acesso o tempo todo antes de sair da tela. No iOS, isso ficou como estava. O canal da notificação de rastreamento também ganhou um nome em português, porque a v5 criava esse canal com um nome padrão em inglês.

Depois da mudança, 203 testes passando, nenhum erro de TypeScript.

## O mesmo aparelho, um segundo problema

No mesmo Galaxy A14, desta vez num build local, apareceram dois defeitos logo depois de tocar em permitir no aviso de localização.

O app quebrava com "Maximum update depth exceeded". Um loop de redirecionamento na navegação desmontava e remontava a pilha de autenticação, dezenas de vezes por segundo no log do aparelho, até o React abortar e o processo morrer. Isso atingia quem ainda tinha o cadastro incompleto, quando o aviso era empurrado por cima das telas de autenticação.

O outro problema era o SDK de localização sendo reiniciado a cada sync, o que colocava o prompt de permissão em segundo plano em loop. Mais de 50 syncs, e o mesmo número de pedidos de permissão, em poucos minutos. Agora o SDK só é iniciado quando já está parado.

Antes da correção, ao tocar em permitir com a permissão de segundo plano negada, o app morria todas as vezes. Depois, um pedido de permissão, dois syncs, nenhum crash, de volta para a tela inicial.

Essa correção entrou em cima da anterior, e a suíte ficou em 237 testes, nenhum erro de TypeScript. Entraram testes novos para o caso da navegação e para não ligar de novo um SDK que já está rodando. Sem a correção, esses testes falham.

## Isso também no desktop

Já fiz testes como esses no desktop, com Tauri, em outro dos meus SaaS. O agente sobe uma VM ou um container Docker, grava a tela e confere a gravação com o que deveria aparecer. Os testes podem estar verdes e a notificação nunca mostrar, ou o seletor de arquivo nunca abrir.

> Uma suíte verde não substitui um aparelho real com um build de release.
>
> — tese da edição

## O que eu levo disso

Se o app precisa funcionar num aparelho de verdade, conecte um e peça para o agente explorar. O emulador e a suíte não substituem um build de release num celular físico, principalmente quando o que quebra está numa dependência que você não controla.

A pergunta que fica: você já colocou um aparelho real, ou um ambiente desktop de verdade, na frente dos seus agentes, ou ainda para na suíte de testes?
