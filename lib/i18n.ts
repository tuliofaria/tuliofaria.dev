// UI strings and localized routes per locale. Essay bodies live in content/ensaios (pt-BR) and content/ensaios/en (en).
import { useRouter } from 'next/router'

export type Locale = 'pt-BR' | 'en'

export const LOCALES: Locale[] = ['pt-BR', 'en']
export const DEFAULT_LOCALE: Locale = 'pt-BR'

export function toLocale(value?: string): Locale {
  return value === 'en' ? 'en' : 'pt-BR'
}

// Essays live at /ensaios in Portuguese and /en/issues in English. The page files sit in
// pages/ensaios; next.config.js rewrites /en/issues onto them.
const ESSAYS_BASE: Record<Locale, string> = { 'pt-BR': '/ensaios', en: '/issues' }

export function essaysPath(locale?: string, slug?: string): string {
  const base = ESSAYS_BASE[toLocale(locale)]
  return slug ? `${base}/${slug}` : base
}

// Translates a locale-less path (router.asPath) into the equivalent path for another locale.
export function localizePath(path: string, locale?: string): string {
  return path.replace(/^\/(ensaios|issues)(?=\/|$|\?|#)/, essaysPath(locale))
}

const ptBR = {
  meta: {
    description: 'Bastidores reais de quem constrói. Conteúdo sobre criação, produto, tecnologia e marca pessoal.',
  },
  nav: { essays: 'ensaios', projects: 'projetos', about: 'sobre', newsletter: 'newsletter' },
  theme: { toggle: 'Alternar tema', light: '[claro]', dark: '[escuro]' },
  lang: { switchTo: 'en', switchLabel: 'Read in English' },
  footer: {
    tagline: 'Bastidores reais de quem constrói. Conteúdo sobre criação, produto, tecnologia e marca pessoal.',
    colophon: 'feito com respiro',
  },
  pillars: ['Criação', 'Tecnologia', 'Produto', 'Negócios', 'Marca pessoal'],
  home: {
    title: 'Bastidores reais de quem constrói.',
    subtitle: 'Conteúdo sobre criação, produto, tecnologia e marca pessoal.',
    readEssays: 'Ler os ensaios',
    subscribe: 'Assinar newsletter',
    latest: 'Últimos ensaios',
    seeAll: 'ver todos →',
    pillars: 'cinco pilares',
  },
  essays: {
    pageTitle: 'Ensaios',
    overline: (n: number) => `Ensaios · ${n} ${n === 1 ? 'edição' : 'edições'}`,
    title: 'Tudo que aprendi construindo, por escrito.',
    all: 'todos',
    back: '← ensaios',
    read: (time: string) => `${time} de leitura`,
    prev: '← anterior',
    next: 'próximo →',
    newsletterTitle: 'Não perca o próximo ensaio.',
  },
  projects: {
    pageTitle: 'Projetos',
    title: 'Coisas que construí, e o que virou de cada uma.',
    subtitle: 'Nem tudo deu certo. Os arquivados ensinaram tanto quanto os ativos.',
    status: { ativo: 'ativo', 'em construção': 'em construção', arquivado: 'arquivado' },
    newsletterTitle: 'Acompanhe o que vem por aí.',
  },
  about: {
    pageTitle: 'Sobre',
    title: 'Escrevo sobre o que aprendo construindo.',
    portraitAlt: 'Tulio Faria',
    find: 'onde me encontrar',
    pano: 'bastidores · 360°',
    links: {
      essays: ['ensaios', 'leitura semanal por escrito'],
      videos: ['vídeos', 'processos gravados em tempo real'],
      devpleno: ['devpleno', 'o canal de programação no YouTube'],
      newsletter: ['newsletter', 'um envio por semana, no e-mail'],
    },
  },
  newsletter: {
    pageTitle: 'Newsletter',
    overline: 'Newsletter · um envio por semana',
    title: 'Os bastidores, direto no seu e-mail.',
    subtitle: 'Um ensaio por semana sobre criação, produto e tecnologia. Sem spam, sem hype, sem "segredo que ninguém te conta".',
    formTitle: 'Assine agora.',
    formButton: 'Quero receber',
    stats: [['semanal', 'frequência'], ['0', 'spam'], ['2 min', 'leitura']] as Array<[string, string]>,
  },
  form: {
    title: 'Receba os bastidores no seu e-mail.',
    note: 'Um envio por semana. Sem spam, sem hype.',
    button: 'Assinar',
    placeholder: 'seu@email.com',
    emailLabel: 'E-mail',
    sending: 'Enviando…',
    done: '→ Pronto. Confira sua caixa de entrada.',
    error: 'Algo deu errado. Tente de novo em instantes.',
  },
}

export type Dictionary = typeof ptBR

const en: Dictionary = {
  meta: {
    description: 'The real behind-the-scenes of building things. Writing on creation, product, technology and personal brand.',
  },
  nav: { essays: 'essays', projects: 'projects', about: 'about', newsletter: 'newsletter' },
  theme: { toggle: 'Toggle theme', light: '[light]', dark: '[dark]' },
  lang: { switchTo: 'pt', switchLabel: 'Ler em português' },
  footer: {
    tagline: 'The real behind-the-scenes of building things. Writing on creation, product, technology and personal brand.',
    colophon: 'made with room to breathe',
  },
  pillars: ['Creation', 'Technology', 'Product', 'Business', 'Personal brand'],
  home: {
    title: 'The real behind-the-scenes of building things.',
    subtitle: 'Writing on creation, product, technology and personal brand.',
    readEssays: 'Read the essays',
    subscribe: 'Subscribe',
    latest: 'Latest essays',
    seeAll: 'see all →',
    pillars: 'five pillars',
  },
  essays: {
    pageTitle: 'Essays',
    overline: (n: number) => `Essays · ${n} ${n === 1 ? 'issue' : 'issues'}`,
    title: 'Everything I learned building, in writing.',
    all: 'all',
    back: '← essays',
    read: (time: string) => `${time} read`,
    prev: '← previous',
    next: 'next →',
    newsletterTitle: "Don't miss the next essay.",
  },
  projects: {
    pageTitle: 'Projects',
    title: "Things I've built, and what became of each one.",
    subtitle: "Not everything worked out. The archived ones taught me as much as the active ones.",
    status: { ativo: 'active', 'em construção': 'in progress', arquivado: 'archived' },
    newsletterTitle: "Follow what's coming next.",
  },
  about: {
    pageTitle: 'About',
    title: 'I write about what I learn while building.',
    portraitAlt: 'Tulio Faria',
    find: 'where to find me',
    pano: 'behind the scenes · 360°',
    links: {
      essays: ['essays', 'a weekly read, in writing'],
      videos: ['videos', 'processes recorded in real time'],
      devpleno: ['devpleno', 'my programming channel on YouTube (in Portuguese)'],
      newsletter: ['newsletter', 'one email a week'],
    },
  },
  newsletter: {
    pageTitle: 'Newsletter',
    overline: 'Newsletter · one email a week',
    title: 'The behind-the-scenes, straight to your inbox.',
    subtitle: 'One essay a week on creation, product and technology. No spam, no hype, no "secret nobody tells you".',
    formTitle: 'Subscribe now.',
    formButton: 'Sign me up',
    stats: [['weekly', 'frequency'], ['0', 'spam'], ['2 min', 'read']],
  },
  form: {
    title: 'Get the behind-the-scenes in your inbox.',
    note: 'One email a week. No spam, no hype.',
    button: 'Subscribe',
    placeholder: 'you@email.com',
    emailLabel: 'Email',
    sending: 'Sending…',
    done: '→ Done. Check your inbox.',
    error: 'Something went wrong. Try again in a moment.',
  },
}

const DICTIONARIES: Record<Locale, Dictionary> = { 'pt-BR': ptBR, en }

export function getDictionary(locale?: string): Dictionary {
  return DICTIONARIES[toLocale(locale)]
}

export function useLocale(): Locale {
  return toLocale(useRouter().locale)
}

export function useT(): Dictionary {
  return getDictionary(useRouter().locale)
}
