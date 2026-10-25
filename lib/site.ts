// Site-wide URL helpers. SITE_URL is the production origin used in canonical, hreflang and the sitemap.
import { essaysPath, toLocale } from './i18n'

export const SITE_URL = 'https://tuliofaria.dev'

// Absolute URL for a locale-less path (e.g. '/sobre', '/ensaios/slug'). English lives under /en.
export function absoluteUrl(locale: string | undefined, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '')
  return toLocale(locale) === 'en' ? `${SITE_URL}/en${clean}` : `${SITE_URL}${clean}`
}

// Absolute URL of an essay in a locale: /ensaios/<slug> (pt-BR) or /en/issues/<slug> (en).
export function issueUrl(locale: string | undefined, slug: string): string {
  return absoluteUrl(locale, essaysPath(locale, slug))
}
