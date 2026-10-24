// [BTS] tulio — Newsletter (full page)
import React from 'react'
import Head from 'next/head'
import { Overline } from '../components/kit'
import { NewsletterForm } from '../components/content'
import { useT } from '../lib/i18n'

const NewsletterPage = () => {
  const t = useT().newsletter
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(56px,10vw,140px) var(--gutter)' }}>
      <Head><title>{`${t.pageTitle} — [BTS] tulio`}</title></Head>
      <div style={{ maxWidth: 'var(--measure)' }}>
        <Overline>{t.overline}</Overline>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4.25rem)', letterSpacing: '-0.03em', lineHeight: 1, margin: '16px 0 0', maxWidth: '16ch' }}>
          {t.title}
        </h1>
        <p style={{ fontSize: 'clamp(1.125rem,2.2vw,1.375rem)', color: 'var(--text-secondary)', marginTop: 'var(--space-l)', lineHeight: 1.5, maxWidth: '46ch' }}>
          {t.subtitle}
        </p>
        <div style={{ marginTop: 'var(--space-2xl)', borderTop: 'var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
          <NewsletterForm title={t.formTitle} buttonLabel={t.formButton} />
        </div>
        <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
          {t.stats.map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.5rem)', letterSpacing: '-0.02em' }}>{v}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsletterPage
