// [BTS] tulio — site content (pt-br, editorial voice)

export const ISSUES = [
  {
    n: 'N°06',
    slug: 'cortando-roadmap',
    title: 'O que aprendi cortando 40% do meu roadmap',
    excerpt:
      'Menos features, mais clareza. O processo de decidir o que não construir — e por que isso foi a melhor decisão de produto do ano.',
    tags: ['produto', 'processo'],
    date: '24 mai 2026',
    read: '8 min',
    body: [
      { type: 'p', text: 'Comecei o ano com um roadmap de 22 itens. Terminei o primeiro trimestre com 13. Não porque falhei em entregar — porque cortei sete deles de propósito. Aqui está o que aprendi.' },
      { type: 'h2', text: 'O custo invisível de manter tudo aberto' },
      { type: 'p', text: 'Cada item no roadmap não custa só o tempo de construir. Custa atenção: toda semana você revisita, repriorisa, explica para alguém por que ainda não começou. Vinte e dois itens viram vinte e duas pequenas dívidas mentais.' },
      { type: 'p', text: 'Quando cortei sete, não ganhei só tempo de execução. Ganhei foco — e foco é a única coisa que não escala comprando mais.' },
      { type: 'quote', text: 'O processo importa mais que o resultado. Mas cortar é parte do processo.', cite: 'anotação de produto, abril/2026' },
      { type: 'h2', text: 'Como decidi o que sai' },
      { type: 'p', text: "Usei uma pergunta só: se eu precisasse explicar duas vezes por que isso importa, o item saía. Clareza é a marca — vale para conteúdo e vale para roadmap. O que não se defende em uma frase, não se constrói." },
      { type: 'p', text: "Errei em alguns cortes. Trouxe dois itens de volta um mês depois. Aqui está o porquê: eu tinha confundido 'difícil de explicar' com 'pouco importante'. Nem sempre é a mesma coisa." },
      { type: 'h2', text: 'O que ficou' },
      { type: 'p', text: "Treze itens, todos defensáveis em uma frase. A equipe parou de perguntar 'em que ordem?' e começou a perguntar 'o que está pronto?'. Essa mudança de pergunta vale mais do que qualquer feature que cortei." },
    ],
  },
  {
    n: 'N°05',
    slug: 'construir-em-publico',
    title: 'Construir em público é estratégia, não vaidade',
    excerpt:
      'Por que documentar o processo gera mais composto do que mostrar o resultado pronto.',
    tags: ['marca pessoal'],
    date: '17 mai 2026',
    read: '6 min',
    body: [
      { type: 'p', text: 'Tem gente que confunde construir em público com performar sucesso. São coisas opostas. Uma mostra o caminho; a outra esconde o caminho e vende o destino.' },
      { type: 'h2', text: 'O composto do processo' },
      { type: 'p', text: 'Cada post sobre um problema real atrai gente que tem o mesmo problema. Com o tempo, você não tem audiência — tem um grupo de pessoas que confia no seu critério porque viu como você pensa.' },
      { type: 'quote', text: 'Construir em público é estratégia. O resultado é consequência, não conteúdo.', cite: 'tese da edição' },
      { type: 'p', text: 'Documentar o erro custa orgulho no curto prazo e gera confiança no longo. É o melhor trade que conheço.' },
    ],
  },
  {
    n: 'N°04',
    slug: 'produto-perfeito',
    title: 'Por que parei de perseguir o produto perfeito',
    excerpt:
      'A diferença entre polir e adiar. E como o medo de lançar se disfarça de capricho.',
    tags: ['produto', 'criação'],
    date: '10 mai 2026',
    read: '7 min',
    body: [
      { type: 'p', text: 'Por anos eu chamei de capricho o que era, na verdade, medo de lançar. Polir um produto é diferente de adiar a conversa com quem vai usá-lo.' },
      { type: 'h2', text: 'Polir vs. adiar' },
      { type: 'p', text: 'Polir responde a um problema conhecido. Adiar inventa problemas para não ter que ouvir um real. A pergunta honesta é: estou melhorando isto para o usuário ou para a minha ansiedade?' },
    ],
  },
  {
    n: 'N°03',
    slug: 'arquitetura-dia-um',
    title: 'A arquitetura que eu queria ter desenhado no dia um',
    excerpt:
      'Decisões técnicas que parecem prematuras no início e óbvias em retrospecto.',
    tags: ['tecnologia'],
    date: '3 mai 2026',
    read: '11 min',
    body: [
      { type: 'p', text: 'Retrospecto é injusto: tudo parece óbvio depois. Mas algumas decisões de arquitetura eu realmente poderia ter tomado no dia um — e teriam custado uma tarde.' },
    ],
  },
  {
    n: 'N°02',
    slug: 'cobrar-caro',
    title: 'Cobrar caro é uma decisão de produto',
    excerpt:
      'Preço não é número no final — é a primeira coisa que define para quem você constrói.',
    tags: ['negócios'],
    date: '26 abr 2026',
    read: '5 min',
    body: [
      { type: 'p', text: 'Preço não é a última decisão; é a primeira. Ele define quem entra, o que esperam e o que você precisa entregar. Cobrar caro é escolher um problema mais sério para resolver.' },
    ],
  },
  {
    n: 'N°01',
    slug: 'primeiro-video',
    title: 'O primeiro vídeo é sempre ruim. Grave mesmo assim.',
    excerpt:
      'Sobre começar antes de estar pronto, e por que a vergonha some na vigésima tentativa.',
    tags: ['criação'],
    date: '19 abr 2026',
    read: '4 min',
    body: [
      { type: 'p', text: 'Meu primeiro vídeo é constrangedor. O vigésimo é decente. Não tem atalho entre os dois — só os dezoito do meio, que ninguém posta mas todo mundo precisa gravar.' },
    ],
  },
]

export const PROJECTS = [
  { name: 'Atlas', desc: 'Editor de notas com IA rodando local, sem nuvem.', year: '2026', status: 'em construção' },
  { name: 'Hangar', desc: 'Infra de deploy de uma linha para side-projects.', year: '2025', status: 'ativo' },
  { name: '[BTS] tulio', desc: 'Este site, a newsletter e os vídeos.', year: '2026', status: 'ativo' },
  { name: 'Cargo', desc: 'CLI para versionar assets de design junto do código.', year: '2024', status: 'arquivado' },
]

export const PILLARS = ['Criação', 'Tecnologia', 'Produto', 'Negócios', 'Marca pessoal']
