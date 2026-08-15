// [BTS] tulio — site data

export interface Project {
  name: string
  desc: string
  year: string
  status: 'ativo' | 'em construção' | 'arquivado'
  url?: string
}

export const PROJECTS: Project[] = [
  { name: 'PipesBot', desc: 'WhatsApp como infraestrutura para qualquer aplicação, com número oficial ou coexistência.', year: '2026', status: 'ativo', url: 'https://pipes.bot' },
  { name: 'Selva CMS', desc: 'CMS open source, multi-tenant e serverless, gerenciável via MCP.', year: '2026', status: 'ativo', url: 'https://selva.run' },
  { name: 'Selva Mail', desc: 'E-mail transacional e de marketing rodando na sua própria conta AWS.', year: '2026', status: 'ativo', url: 'https://selva.run' },
  { name: 'Conta49', desc: 'Contabilidade digital descomplicada para programadores.', year: '2020', status: 'ativo', url: 'https://conta49.com.br' },
  { name: 'DevPleno', desc: 'O canal no YouTube e a escola: cursos, mentorias e conteúdo para desenvolvedores construírem produtos de classe mundial.', year: '2016', status: 'ativo', url: 'https://devpleno.com' },
  { name: 'FullStack Master', desc: 'A formação de programação, repensada para a era da IA.', year: '2026', status: 'em construção', url: 'https://devpleno.com' },
  { name: '[BTS] tulio', desc: 'Este site, a newsletter e os vídeos.', year: '2026', status: 'ativo', url: 'https://tuliofaria.dev' },
]

export const PILLARS = ['Criação', 'Tecnologia', 'Produto', 'Negócios', 'Marca pessoal']
