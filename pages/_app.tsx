import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../css/styles.css'
import '@photo-sphere-viewer/core/index.css'
import { SiteHeader, SiteFooter } from '../components/kit'

const LS = 'bts-tulio'

export default function MyApp({ Component, pageProps }: AppProps) {
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
        <meta name='description' content='Bastidores reais de quem constrói. Conteúdo sobre criação, produto, tecnologia e marca pessoal.' />
      </Head>
      <SiteHeader theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <SiteFooter />
    </div>
  )
}
