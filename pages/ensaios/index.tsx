// [BTS] tulio — Issue list / ensaios
import React, { useState } from 'react'
import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { getAllIssueMetas, type IssueMeta } from '../../lib/ensaios'
import { Overline } from '../../components/kit'
import { IssueRow } from '../../components/content'
import { useT } from '../../lib/i18n'

const IssueList = ({ issues }: { issues: IssueMeta[] }) => {
  const t = useT().essays
  const allTags = [t.all, ...Array.from(new Set(issues.flatMap((i) => i.tags)))]
  const [filter, setFilter] = useState(t.all)
  const shown = filter === t.all ? issues : issues.filter((i) => i.tags.includes(filter))
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(40px,7vw,88px) var(--gutter) 0' }}>
      <Head><title>{`${t.pageTitle} — [BTS] tulio`}</title></Head>
      <Overline>{t.overline(issues.length)}</Overline>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.25rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: '12px 0 0', maxWidth: '18ch' }}>
        {t.title}
      </h1>

      {/* Filter row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: 'var(--space-xl) 0 var(--space-s)' }}>
        {allTags.map((tag) => {
          const active = tag === filter
          return (
            <button key={tag} onClick={() => setFilter(tag)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '7px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', whiteSpace: 'nowrap',
                border: active ? '1px solid var(--text-primary)' : 'var(--hairline)',
                background: active ? 'var(--text-primary)' : 'transparent',
                color: active ? 'var(--text-on-inverse)' : 'var(--text-secondary)',
                transition: 'all var(--dur-fast) var(--ease-standard)',
              }}>{tag}</button>
          )
        })}
      </div>

      <div style={{ borderTop: 'var(--rule-strong)' }}>
        {shown.map((it) => <IssueRow key={it.slug} issue={it} />)}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return { props: { issues: getAllIssueMetas(locale) } }
}

export default IssueList
