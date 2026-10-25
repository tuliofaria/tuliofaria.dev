// sitemap.xml: main pages plus every essay in both languages, each with hreflang alternates.
// Server-rendered on request (cached at the edge) so new essays show up without extra steps.
import type { GetServerSideProps } from 'next'
import { getAllIssues } from '../lib/ensaios'
import { absoluteUrl, issueUrl } from '../lib/site'

interface Alt { lang: string; href: string }
interface Entry { loc: string; alternates: Alt[] }

const escapeXml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Pages that exist in both languages under the same locale-less path (essay index is localized).
const MAIN_PATHS: Array<{ pt: string; en: string }> = [
  { pt: '/', en: '/' },
  { pt: '/ensaios', en: '/issues' },
  { pt: '/projetos', en: '/projetos' },
  { pt: '/projetos/estudio-3d', en: '/projetos/estudio-3d' },
  { pt: '/sobre', en: '/sobre' },
  { pt: '/newsletter', en: '/newsletter' },
]

function buildEntries(): Entry[] {
  const entries: Entry[] = []
  const alts = (pt: string | null, en: string | null): Alt[] => [
    ...(pt ? [{ lang: 'pt-BR', href: pt }] : []),
    ...(en ? [{ lang: 'en', href: en }] : []),
    ...(pt ? [{ lang: 'x-default', href: pt }] : []),
  ]
  for (const p of MAIN_PATHS) {
    const pt = absoluteUrl('pt-BR', p.pt)
    const en = absoluteUrl('en', p.en)
    entries.push({ loc: pt, alternates: alts(pt, en) }, { loc: en, alternates: alts(pt, en) })
  }
  const enIssues = getAllIssues('en')
  for (const issue of getAllIssues('pt-BR')) {
    const en = enIssues.find((e) => e.ptSlug === issue.slug)
    const pt = issueUrl('pt-BR', issue.slug)
    const enUrl = en ? issueUrl('en', en.slug) : null
    entries.push({ loc: pt, alternates: alts(pt, enUrl) })
    if (enUrl) entries.push({ loc: enUrl, alternates: alts(pt, enUrl) })
  }
  return entries
}

function render(entries: Entry[]): string {
  const urls = entries
    .map((e) => {
      const links = e.alternates
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${escapeXml(a.href)}"/>`)
        .join('\n')
      return `  <url>\n    <loc>${escapeXml(e.loc)}</loc>\n${links}\n  </url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
}

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  // Only one sitemap, at /sitemap.xml; the /en/sitemap.xml copy that i18n would create is a 404.
  if (locale === 'en') return { notFound: true }
  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.write(render(buildEntries()))
  res.end()
  return { props: {} }
}

export default function Sitemap() {
  return null
}
