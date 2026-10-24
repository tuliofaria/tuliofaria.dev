// [BTS] tulio — site data
import type { Locale } from '../lib/i18n'

export interface Project {
  name: string
  desc: Record<Locale, string>
  year: string
  status: 'ativo' | 'em construção' | 'arquivado'
  url?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Estúdio 3D', year: '2026', status: 'ativo', url: '/projetos/estudio-3d/',
    desc: {
      'pt-BR': 'Uma visita interativa ao estúdio DevPleno, reconstruído no Blender e explorável em 3D.',
      en: 'An interactive tour of the DevPleno studio, rebuilt in Blender and explorable in 3D.',
    },
  },
  {
    name: 'PipesBot', year: '2026', status: 'ativo', url: 'https://pipes.bot',
    desc: {
      'pt-BR': 'WhatsApp como infraestrutura para qualquer aplicação, com número oficial ou coexistência.',
      en: 'WhatsApp as infrastructure for any application, on an official number or in coexistence mode.',
    },
  },
  {
    name: 'Selva CMS', year: '2026', status: 'ativo', url: 'https://selva.run',
    desc: {
      'pt-BR': 'CMS open source, multi-tenant e serverless, gerenciável via MCP.',
      en: 'Open source, multi-tenant, serverless CMS you can manage over MCP.',
    },
  },
  {
    name: 'Selva Mail', year: '2026', status: 'ativo', url: 'https://selva.run',
    desc: {
      'pt-BR': 'E-mail transacional e de marketing rodando na sua própria conta AWS.',
      en: 'Transactional and marketing email running in your own AWS account.',
    },
  },
  {
    name: 'Conta49', year: '2020', status: 'ativo', url: 'https://conta49.com.br',
    desc: {
      'pt-BR': 'Contabilidade digital descomplicada para programadores.',
      en: 'Straightforward online accounting for programmers in Brazil.',
    },
  },
  {
    name: 'DevPleno', year: '2016', status: 'ativo', url: 'https://devpleno.com',
    desc: {
      'pt-BR': 'O canal no YouTube e a escola: cursos, mentorias e conteúdo para desenvolvedores construírem produtos de classe mundial.',
      en: 'The YouTube channel and the school: courses, mentoring and content to help developers build world-class products.',
    },
  },
  {
    name: 'FullStack Master', year: '2026', status: 'em construção', url: 'https://devpleno.com',
    desc: {
      'pt-BR': 'A formação de programação, repensada para a era da IA.',
      en: 'The programming course, rethought for the AI era.',
    },
  },
  {
    name: '[BTS] tulio', year: '2026', status: 'ativo', url: 'https://tuliofaria.dev',
    desc: {
      'pt-BR': 'Este site, a newsletter e os vídeos.',
      en: 'This site, the newsletter and the videos.',
    },
  },
]
