// Loads essays from content/ensaios/*.md (server-side only — use in getStaticProps).
// pt-BR files sit at the root of content/ensaios; each English translation lives at
// content/ensaios/en/<english-slug>.md and points to its Portuguese file with `ptSlug` in the frontmatter.
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { toLocale } from './i18n'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SLUG_REDIRECTS: Record<string, string> = require('./slug-redirects.js')

const ENSAIOS_DIR = path.join(process.cwd(), 'content', 'ensaios')

function dirFor(locale?: string): string {
  return toLocale(locale) === 'en' ? path.join(ENSAIOS_DIR, 'en') : ENSAIOS_DIR
}

export interface IssueMeta {
  slug: string
  order: number
  n: string
  title: string
  excerpt: string
  tags: string[]
  date: string
  read: string
  // English files only: slug of the Portuguese original (frontmatter `ptSlug`).
  ptSlug?: string
  // Optional site-relative image path (frontmatter `cover`), used as og:image / twitter:image.
  cover?: string
}

export interface Issue extends IssueMeta {
  content: string
}

function readIssues(locale?: string): Issue[] {
  const dir = dirFor(locale)
  if (!fs.existsSync(dir)) return []
  const isEn = toLocale(locale) === 'en'
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace(/\.md$/, '')
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'))
      if (isEn && !data.ptSlug) {
        throw new Error(`content/ensaios/en/${f}: missing "ptSlug" in the frontmatter (slug of the Portuguese file).`)
      }
      return {
        slug,
        ...(isEn ? { ptSlug: String(data.ptSlug) } : {}),
        order: data.n as number,
        n: `N°${String(data.n).padStart(2, '0')}`,
        title: data.title as string,
        excerpt: data.excerpt as string,
        tags: (data.tags || []) as string[],
        date: data.date as string,
        read: data.read as string,
        ...(data.cover ? { cover: String(data.cover) } : {}),
        content: content.trim(),
      }
    })
    .sort((a, b) => b.order - a.order)
}

export function getAllIssueMetas(locale?: string): IssueMeta[] {
  return getAllIssues(locale).map(({ content, ...meta }) => meta)
}

// Build-time consistency checks between the two languages. Throws (and fails `next build`) on:
// a ptSlug with no Portuguese file, two English files pointing to the same ptSlug,
// duplicate slugs, or a slug-redirects entry whose target English file does not exist.
let validated = false
function validateOnce(): void {
  if (validated) return
  const pt = readIssues('pt-BR')
  const en = readIssues('en')
  const errors: string[] = []
  for (const list of [pt, en]) {
    const seen = new Set<string>()
    for (const i of list) {
      const key = i.slug.toLowerCase()
      if (seen.has(key)) errors.push(`duplicate slug "${i.slug}"`)
      seen.add(key)
    }
  }
  const ptSlugs = new Set(pt.map((i) => i.slug))
  const usedPt = new Map<string, string>()
  for (const i of en) {
    if (!ptSlugs.has(i.ptSlug!)) errors.push(`content/ensaios/en/${i.slug}.md: ptSlug "${i.ptSlug}" has no Portuguese file`)
    if (usedPt.has(i.ptSlug!)) errors.push(`ptSlug "${i.ptSlug}" is used by both "${usedPt.get(i.ptSlug!)}" and "${i.slug}"`)
    usedPt.set(i.ptSlug!, i.slug)
  }
  const enSlugs = new Set(en.map((i) => i.slug))
  for (const [oldSlug, newSlug] of Object.entries(SLUG_REDIRECTS)) {
    if (!enSlugs.has(newSlug)) errors.push(`lib/slug-redirects.js: "${oldSlug}" -> "${newSlug}" but content/ensaios/en/${newSlug}.md does not exist`)
  }
  if (errors.length) throw new Error(`Essay slug validation failed:\n- ${errors.join('\n- ')}`)
  validated = true
}

export function getAllIssues(locale?: string): Issue[] {
  validateOnce()
  return readIssues(locale)
}

// Slug of the same essay in the other language, or null when there is no translation.
// EN -> PT reads `ptSlug`; PT -> EN is a reverse lookup over the English files.
export function getAltSlug(locale: string | undefined, slug: string): string | null {
  if (toLocale(locale) === 'en') {
    return getAllIssues('en').find((i) => i.slug === slug)?.ptSlug ?? null
  }
  return getAllIssues('en').find((i) => i.ptSlug === slug)?.slug ?? null
}
