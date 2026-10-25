import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../css/styles.css'
import '@photo-sphere-viewer/core/index.css'
import { useRouter } from 'next/router'
import { SiteHeader, SiteFooter } from '../components/kit'
import { getDictionary, localizePath } from '../lib/i18n'
import { absoluteUrl } from '../lib/site'

const LS = 'bts-tulio'

// Essay pages render their own canonical + hreflang (slugs differ per language), so skip the generic ones there.
const ESSAY_ROUTE = '/ensaios/[slug]'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const t = getDictionary(router.locale)
  // asPath excludes the locale prefix; strip query/hash for canonical alternates.
  const path = router.asPath.split(/[?#]/)[0].replace(/\/$/, '')
  const isEssay = router.pathname === ESSAY_ROUTE
  const isError = router.pathname === '/404' || router.pathname === '/_error'
  const altSlug = (pageProps as { altSlug?: string | null }).altSlug ?? null
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LS) || '{}').theme
      if (saved) setTheme(saved)
    } catch (e) {}
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(LS, JSON.stringify({ theme })) } catch (e) {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>[BTS] tulio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={t.meta.description} />
        {!isEssay && !isError && <link rel='canonical' href={absoluteUrl(router.locale, localizePath(path, router.locale))} />}
        {!isEssay && !isError && <link rel='alternate' hrefLang='pt-BR' href={absoluteUrl('pt-BR', localizePath(path, 'pt-BR'))} />}
        {!isEssay && !isError && <link rel='alternate' hrefLang='en' href={absoluteUrl('en', localizePath(path, 'en'))} />}
        {!isEssay && !isError && <link rel='alternate' hrefLang='x-default' href={absoluteUrl('pt-BR', localizePath(path, 'pt-BR'))} />}
      </Head>
      <SiteHeader theme={theme} toggleTheme={toggleTheme} isEssay={isEssay} altSlug={altSlug} />
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <SiteFooter />
    </div>
  )
}
