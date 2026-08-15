// [BTS] tulio — Issue list / ensaios
import React, { useState } from 'react'
import Head from 'next/head'
import { ISSUES } from '../../data/site'
import { Overline } from '../../components/kit'
import { IssueRow } from '../../components/content'

const IssueList = () => {
  const allTags = ['todos', ...Array.from(new Set(ISSUES.flatMap((i) => i.tags)))]
  const [filter, setFilter] = useState('todos')
  const shown = filter === 'todos' ? ISSUES : ISSUES.filter((i) => i.tags.includes(filter))
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,7vw,88px) var(--gutter) 0' }}>
      <Head><title>Ensaios — [BTS] tulio</title></Head>
      <Overline>Ensaios · {ISSUES.length} {ISSUES.length === 1 ? 'edição' : 'edições'}</Overline>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.25rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '12px 0 0', maxWidth: '18ch' }}>
        Tudo que aprendi construindo, por escrito.
      </h1>

      {/* Filter row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: 'var(--space-xl) 0 var(--space-s)' }}>
        {allTags.map((t) => {
          const active = t === filter
          return (
            <button key={t} onClick={() => setFilter(t)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '7px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', whiteSpace: 'nowrap',
                border: active ? '1px solid var(--text-primary)' : 'var(--hairline)',
                background: active ? 'var(--text-primary)' : 'transparent',
                color: active ? 'var(--text-on-inverse)' : 'var(--text-secondary)',
                transition: 'all var(--dur-fast) var(--ease-standard)',
              }}>{t}</button>
          )
        })}
      </div>

      <div style={{ borderTop: 'var(--rule-strong)' }}>
        {shown.map((it) => <IssueRow key={it.slug} issue={it} />)}
      </div>
    </div>
  )
}

export default IssueList
