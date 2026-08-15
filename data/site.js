// [BTS] tulio — site content (pt-br, editorial voice)

export const ISSUES = [
  {
    n: 'N°01',
    slug: 'one-person-business',
    title: 'Sumi por meses. Foi isso que eu estive construindo',
    excerpt:
      'One Person Business: como estou criando e operando vários negócios quase sozinho — com IA, automação e sociedade com especialistas.',
    tags: ['negócios', 'tecnologia'],
    date: '15 ago 2026',
    read: '7 min',
    body: [
      { type: 'p', text: 'Não, o DevPleno não acabou. Eu sumi por um tempo, mas não parei: nesses meses estive construindo produtos, testando linhas de negócio e organizando tudo isso em um modelo que chamo de One Person Business — criar e tocar vários negócios praticamente sozinho, com IA, automação e sociedade com especialistas. Este é o primeiro ensaio dos bastidores dessa história.' },
      { type: 'h2', text: 'O gargalo sempre fui eu' },
      { type: 'p', text: 'Mesmo tendo equipe, tudo passava por mim — e isso limitava o quanto era possível executar. Cada decisão, cada revisão, cada projeto novo esbarrava na mesma fila. Com IA, o gargalo não desaparece, mas diminui muito. É exatamente por isso que hoje dá para tocar várias frentes ao mesmo tempo sem que nenhuma delas pare para esperar a minha agenda.' },
      { type: 'h2', text: 'One Person Business + especialista' },
      { type: 'p', text: 'O ponto central: hoje dá para fazer quase tudo com IA — marketing, programação, operação — independentemente de você ser programador ou não. Só que isso cria um paradoxo. Se qualquer pessoa pode "ser especialista" em qualquer coisa, o que diferencia um negócio do outro?' },
      { type: 'quote', text: 'Se todo mundo pode ser especialista com IA, o diferencial passa a ser quem conduz a conversa.', cite: 'tese da edição' },
      { type: 'p', text: 'Daí a estratégia: juntar a minha experiência de programação e orquestração com a expertise de alguém que conhece o mercado de verdade. Não sou eu perguntando para a IA sobre um mercado que não conheço; é o especialista ditando o caminho e usando a IA junto. Na prática, isso virou sociedade com gente de gestão, com advogado, e assim por diante — várias linhas de faturamento, cada uma com um parceiro de nicho.' },
      { type: 'p', text: 'E tem um efeito colateral excelente: um aprendizado em um negócio alimenta todos os outros. A régua de cobrança que nasceu em um produto vira padrão em todos. O funil que funcionou em um nicho vira hipótese nos demais. É um ciclo de melhoria composto.' },
      { type: 'h2', text: 'Nem tudo precisa ser agente' },
      { type: 'p', text: 'Boa parte dos problemas da empresa hoje é resolvida com agentes e workflows — mas com uma ressalva importante. Muita coisa é só um workflow com um ponto de decisão rodando um LLM. E muita coisa continua sendo código puro: régua de cobrança não precisa de agente, por mais bonito que seja fazer com agente. O fluxo que tem funcionado: prototipar o workflow no n8n e, quando ele se prova, trazer para o código.' },
      { type: 'h2', text: 'O SaaS não morreu' },
      { type: 'p', text: 'Muita gente diz que o SaaS acabou porque agora qualquer pessoa pode criar um. Sim, todo mundo pode criar — mas as pessoas têm outras coisas para fazer. Dá para uma contabilidade criar o próprio CRM? Dá. Mas a contadora tem o operacional dela para tocar. Duas oportunidades que venho explorando: SaaS de infraestrutura, que outros negócios usam como base, e SaaS regulatórios — novas leis surgindo que vão exigir software. Vale olhar o que está aparecendo de regulatório na sua área.' },
      { type: 'p', text: 'Foi desse raciocínio que nasceram os produtos desta fase. O PipesBot resolve a conexão de qualquer aplicação com o WhatsApp — criado primeiro para um problema interno, virou produto que ex-alunos já colocam dentro dos SaaS deles. E o Selva.run atacou as duas coisas que travavam todo projeto novo: subir conteúdo e disparar e-mail. O Selva CMS é open source, multi-tenant e gerenciável via MCP — dá para publicar conteúdo pelo Claude. O Selva Mail roda na sua própria conta AWS, com custo que escala para zero. O ganho real é padronização: projeto novo é criar um tenant, apontar o domínio e está no ar em um minuto.' },
      { type: 'h2', text: 'Como se aprende a programar agora?' },
      { type: 'p', text: 'A parte que mais me inquieta. A área mudou muito de um ano para cá, e as chances são de que a gente não vá mais escrever tanto código. Se o ato de programar muda, a forma de aprender muda junto. Os melhores programadores hoje sabem especificar: descrever bem o que querem, não só a funcionalidade, mas como ela deve ser implementada. E especificar exige conceito — é por isso que existe tanta crítica ao vibe code: falta o vocabulário para pedir direito e para julgar se o resultado está aceitável.' },
      { type: 'p', text: 'É esse o desafio por trás da nova versão do FullStack Master: repensar a formação para a era da IA mantendo os conceitos e os projetos práticos, mas colocando a IA na ordem certa do processo — e não como um copiloto colado por cima do curso antigo. Ainda não há data, mas essa é a linha. E é isso que este espaço vai documentar: as decisões, os erros e o processo, não só o resultado.' },
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
