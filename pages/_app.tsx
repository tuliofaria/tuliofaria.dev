import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../css/styles.css'
import '@photo-sphere-viewer/core/index.css'
import { useRouter } from 'next/router'
import { SiteHeader, SiteFooter } from '../components/kit'
import { getDictionary, localizePath } from '../lib/i18n'

const LS = 'bts-tulio'

const SITE_URL = 'https://tuliofaria.dev'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const t = getDictionary(router.locale)
  // asPath excludes the locale prefix; strip query/hash for canonical alternates.
  const path = router.asPath.split(/[?#]/)[0].replace(/\/$/, '')
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
        <link rel='alternate' hrefLang='pt-BR' href={`${SITE_URL}${localizePath(path, 'pt-BR')}`} />
        <link rel='alternate' hrefLang='en' href={`${SITE_URL}/en${localizePath(path, 'en')}`} />
        <link rel='alternate' hrefLang='x-default' href={`${SITE_URL}${localizePath(path, 'pt-BR')}`} />
      </Head>
      <SiteHeader theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <SiteFooter />
    </div>
  )
}
