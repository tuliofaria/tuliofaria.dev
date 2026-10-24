// [BTS] tulio — About / sobre
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Overline, Divider } from '../components/kit'
import { NewsletterForm } from '../components/content'
import { useT, useLocale, essaysPath, type Locale } from '../lib/i18n'

const PanoViewer = dynamic(() => import('../components/PanoViewer'), { ssr: false })

const LINKS: Array<['essays' | 'videos' | 'devpleno' | 'newsletter', string | null]> = [
  ['essays', '/ensaios'],
  ['videos', null],
  ['devpleno', 'https://www.youtube.com/@devpleno'],
  ['newsletter', '/newsletter'],
]

const devpleno = <a href='https://www.youtube.com/@devpleno' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline' }}>DevPleno</a>

const BIO: Record<Locale, React.ReactNode[]> = {
  'pt-BR': [
    <>Sou Tulio. Construo produtos digitais há mais de uma década: alguns deram certo, outros viraram ensaio. Sou o criador do {devpleno}, canal no YouTube sobre programação, carreira e construção de produtos. Aqui eu documento os bastidores: as decisões, os erros e o processo, não só o resultado.</>,
    <>Acredito que construir em público é estratégia, não vaidade. E que a clareza (escrever de um jeito que não precise ser explicado duas vezes) é a habilidade mais subestimada de quem cria.</>,
    <>Sem hype, sem fórmula de sucesso. Só o que dá pra aprender olhando o trabalho de perto.</>,
  ],
  en: [
    <>I'm Tulio. I've been building digital products for more than a decade: some worked, others turned into essays. I created {devpleno}, a Brazilian YouTube channel about programming, careers and building products. Here I document the behind-the-scenes: the decisions, the mistakes and the process, not just the outcome.</>,
    <>I believe building in public is strategy, not vanity. And that clarity (writing in a way that never needs a second explanation) is the most underrated skill a maker can have.</>,
    <>No hype, no success formula. Just what you can learn by looking at the work up close.</>,
  ],
}

const About = () => {
  const t = useT().about
  const locale = useLocale()
  const bio = BIO[locale]
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,7vw,88px) var(--gutter) 0' }}>
      <Head><title>{`${t.pageTitle} — [BTS] tulio`}</title></Head>
      <Overline>{t.pageTitle}</Overline>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.25rem,5.5vw,3.75rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '12px 0 0', maxWidth: '20ch' }}>
        {t.title}
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-2xl)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <img src='/images/tulio-portrait.webp' alt={t.portraitAlt}
            style={{ width: 200, height: 260, flex: 'none', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: 'var(--hairline)', filter: 'grayscale(0.18) saturate(0.92)' }} />
          <div style={{ maxWidth: 'var(--measure)', flex: '1 1 360px' }}>
            <p style={{ fontSize: 19, lineHeight: 1.65, margin: '0 0 var(--space-l)' }}>{bio[0]}</p>
            <p style={{ fontSize: 19, lineHeight: 1.65, margin: '0 0 var(--space-l)', color: 'var(--text-secondary)' }}>{bio[1]}</p>
            <p style={{ fontSize: 19, lineHeight: 1.65, margin: 0, color: 'var(--text-secondary)' }}>{bio[2]}</p>
          </div>
        </div>

        <div style={{ maxWidth: 'var(--measure)' }}>
          <Divider label={t.find} align='left' style={{ marginBottom: 'var(--space-l)' }} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-s)' }}>
            {LINKS.map(([key, link]) => {
              const [label, desc] = t.links[key]
              const href = key === 'essays' ? essaysPath(locale) : link
              return (
              <li key={key} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-m)', borderBottom: 'var(--hairline)', padding: 'var(--space-s) 0' }}>
                {href && href.startsWith('http') ? (
                  <a href={href} target='_blank' rel='noreferrer' className='kit-navlink'
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)', minWidth: 120, letterSpacing: '0.02em' }}>{label} →</a>
                ) : href ? (
                  <Link href={href} className='kit-navlink'
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)', minWidth: 120, letterSpacing: '0.02em' }}>{label} →</Link>
                ) : (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)', minWidth: 120, letterSpacing: '0.02em' }}>{label} →</span>
                )}
                <span style={{ color: 'var(--text-secondary)', fontSize: 15 }}>{desc}</span>
              </li>
              )
            })}
          </ul>
        </div>

        <div>
          <Divider label={t.pano} align='left' style={{ marginBottom: 'var(--space-l)' }} />
          <PanoViewer />
        </div>
      </div>

      <div style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-3xl)', borderTop: 'var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
        <NewsletterForm />
      </div>
    </div>
  )
}

export default About
