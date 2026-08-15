// [BTS] tulio — Home / início
import React from 'react'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { PILLARS } from '../data/site'
import { getAllIssueMetas, type IssueMeta } from '../lib/ensaios'
import { Button, Overline, Divider } from '../components/kit'
import { IssueRow, NewsletterForm } from '../components/content'

const Home = ({ issues }: { issues: IssueMeta[] }) => {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(48px,9vw,128px) var(--gutter) clamp(40px,6vw,72px)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.75rem, 8vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.98, margin: 0, maxWidth: '16ch' }}>
          Bastidores reais de quem constrói.
        </h1>
        <p style={{ fontSize: 'clamp(1.125rem,2.2vw,1.5rem)', color: 'var(--text-secondary)', marginTop: 'var(--space-l)', maxWidth: '44ch', lineHeight: 1.4 }}>
          Conteúdo sobre criação, produto, tecnologia e marca pessoal.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-m)', marginTop: 'var(--space-xl)', flexWrap: 'wrap' }}>
          <Button href='/ensaios' iconRight='→'>Ler os ensaios</Button>
          <Button variant='secondary' href='/newsletter'>Assinar newsletter</Button>
        </div>
      </section>

      {/* Latest essays */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-2xl) var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--space-s)' }}>
          <Overline>Últimos ensaios</Overline>
          <Link href='/ensaios' className='kit-navlink'
            style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
            ver todos →
          </Link>
        </div>
        <div style={{ borderTop: 'var(--rule-strong)' }}>
          {issues.map((it) => <IssueRow key={it.slug} issue={it} />)}
        </div>
      </section>

      {/* Pillars strip */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-l) var(--gutter)' }}>
        <Divider label='cinco pilares' align='left' style={{ marginBottom: 'var(--space-l)' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-m) var(--space-xl)' }}>
          {PILLARS.map((p) => (
            <span key={p} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.25rem,3vw,2rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{p}</span>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-2xl) var(--gutter)' }}>
        <div style={{ borderTop: 'var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { issues: getAllIssueMetas().slice(0, 3) } }
}

export default Home
