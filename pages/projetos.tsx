// [BTS] tulio — Projects / projetos
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { PROJECTS } from '../data/site'
import { Overline, Tag } from '../components/kit'
import { NewsletterForm } from '../components/content'
import { useT, useLocale } from '../lib/i18n'

const Projects = () => {
  const t = useT().projects
  const locale = useLocale()
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,7vw,88px) var(--gutter) 0' }}>
      <Head><title>{`${t.pageTitle} — [BTS] tulio`}</title></Head>
      <Overline>{t.pageTitle}</Overline>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.25rem,5.5vw,3.75rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '12px 0 0', maxWidth: '20ch' }}>
        {t.title}
      </h1>
      <p style={{ fontSize: 'clamp(1.05rem,2vw,1.25rem)', color: 'var(--text-secondary)', marginTop: 'var(--space-l)', maxWidth: '48ch', lineHeight: 1.45 }}>
        {t.subtitle}
      </p>

      <div style={{ borderTop: 'var(--rule-strong)', marginTop: 'var(--space-xl)' }}>
        {PROJECTS.map((p) => (
          <div key={p.name} className='kit-proj'
            style={{ display: 'grid', gridTemplateColumns: 'minmax(160px,1fr) 2fr auto', gap: 'var(--space-l)', alignItems: 'baseline', padding: 'var(--space-l) 0', borderBottom: 'var(--hairline)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.375rem,2.6vw,1.875rem)', letterSpacing: '-0.02em', margin: 0 }}>
              {p.url && p.url.startsWith('/') ? <Link href={p.url}>{p.name}</Link>
                : p.url ? <a href={p.url} target='_blank' rel='noreferrer'>{p.name}</a> : p.name}
            </h3>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{p.desc[locale]}</p>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifySelf: 'end', whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{p.year}</span>
              <Tag variant={p.status === 'ativo' ? 'solid' : 'outline'}>{t.status[p.status]}</Tag>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-3xl)', borderTop: 'var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
        <NewsletterForm title={t.newsletterTitle} />
      </div>
    </div>
  )
}

export default Projects
