// [BTS] tulio — content blocks (issue rows, newsletter form, pull quotes)
import React, { useState } from 'react'
import Link from 'next/link'
import { Tag, Button } from './kit'
import type { IssueMeta } from '../lib/ensaios'

export function IssueRow({ issue }: { issue: IssueMeta }) {
  return (
    <Link href={`/ensaios/${issue.slug}`}
      className='kit-issue'
      style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-l)',
        padding: 'var(--space-l) 0', borderBottom: 'var(--hairline)',
        color: 'var(--text-primary)', textDecoration: 'none',
      }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.04em', paddingTop: 4, minWidth: 48 }}>
        {issue.n}
      </div>
      <div>
        <h3 className='kit-issue__title' style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '0 0 8px' }}>
          {issue.title}
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '0 0 14px', maxWidth: '60ch' }}>
          {issue.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          {issue.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
            {issue.date}  ·  {issue.read}
          </span>
        </div>
      </div>
    </Link>
  )
}

export function NewsletterForm({ title = 'Receba os bastidores no seu e-mail.', note = 'Um envio por semana. Sem spam, sem hype.', buttonLabel = 'Assinar' }: { title?: string; note?: string; buttonLabel?: string }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 18px', maxWidth: '20ch' }}>
        {title}
      </h3>
      {done ? (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-secondary)' }}>→ Pronto. Confira sua caixa de entrada.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }}
          style={{ display: 'flex', gap: 'var(--space-m)', alignItems: 'flex-end', maxWidth: 460, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 240px' }}>
            <input type='email' required placeholder='seu@email.com' value={email} aria-label='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-primary)', background: 'transparent', width: '100%', padding: '10px 2px', border: 'none', borderBottom: '1px solid var(--border-hairline)', outline: 'none' }} />
          </div>
          <Button type='submit'>{buttonLabel}</Button>
        </form>
      )}
      {!done && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.04em', marginTop: 12 }}>{note}</p>}
    </div>
  )
}

export function PullQuote({ text, cite }: { text: string; cite?: string }) {
  return (
    <figure style={{ margin: 'var(--space-2xl) 0', paddingLeft: 'var(--space-l)', borderLeft: '2px solid var(--text-primary)' }}>
      <blockquote style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.375rem, 2.6vw, 1.875rem)', letterSpacing: '-0.02em', lineHeight: 1.25, margin: 0 }}>
        {text}
      </blockquote>
      {cite && <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.04em', marginTop: 14 }}>— {cite}</figcaption>}
    </figure>
  )
}
