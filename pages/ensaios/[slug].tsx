// [BTS] tulio — Read an issue / ensaio (blog-post reader)
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown, { type Components } from 'react-markdown'
import { getAllIssues, type Issue, type IssueMeta } from '../../lib/ensaios'
import { Overline, Tag } from '../../components/kit'
import { NewsletterForm, PullQuote } from '../../components/content'

// Flattens a hast node to its plain text content.
function hastText(node: any): string {
  if (!node) return ''
  if (node.type === 'text') return node.value
  return (node.children || []).map(hastText).join('')
}

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.375rem,2.6vw,1.75rem)', letterSpacing: '-0.02em', lineHeight: 1.18, margin: 'var(--space-2xl) 0 var(--space-s)' }}>{children}</h2>
  ),
  p: ({ children }) => (
    <p style={{ fontSize: 19, lineHeight: 1.65, margin: '0 0 var(--space-l)', color: 'var(--text-primary)' }}>{children}</p>
  ),
  blockquote: ({ node }) => {
    const paragraphs = ((node as any)?.children || [])
      .filter((c: any) => c.tagName === 'p')
      .map(hastText)
      .filter(Boolean)
    const last = paragraphs[paragraphs.length - 1] || ''
    const hasCite = paragraphs.length > 1 && /^[—–-]/.test(last)
    const text = (hasCite ? paragraphs.slice(0, -1) : paragraphs).join(' ')
    const cite = hasCite ? last.replace(/^[—–-]\s*/, '') : undefined
    return <PullQuote text={text} cite={cite} />
  },
}

interface ReadIssueProps {
  issue: Issue
  prev: IssueMeta | null
  next: IssueMeta | null
}

const ReadIssue = ({ issue, prev, next }: ReadIssueProps) => {
  return (
    <article style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(32px,5vw,64px) var(--gutter) 0' }}>
      <Head><title>{`${issue.title} — [BTS] tulio`}</title></Head>
      <Link href='/ensaios' className='kit-navlink'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
        ← ensaios
      </Link>

      {/* Header */}
      <header style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-xl)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Overline>{issue.n}</Overline>
          <span style={{ color: 'var(--border-hairline)' }}>·</span>
          {issue.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.25rem,5.5vw,3.75rem)', letterSpacing: '-0.03em', lineHeight: 1.02, margin: 'var(--space-m) 0 0' }}>
          {issue.title}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-m)', marginTop: 'var(--space-l)', paddingTop: 'var(--space-l)', borderTop: 'var(--hairline)' }}>
          <img src='/images/tulio-portrait.webp' alt='Tulio'
            style={{ width: 42, height: 42, flex: 'none', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: 'var(--hairline)', filter: 'grayscale(0.18) saturate(0.92)' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15 }}>Tulio</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>
              {issue.date} · {issue.read} de leitura
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-2xl)' }}>
        <ReactMarkdown components={markdownComponents}>{issue.content}</ReactMarkdown>
      </div>

      {/* Footer nav */}
      <nav style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-3xl)', borderTop: 'var(--hairline)', paddingTop: 'var(--space-l)', display: 'flex', justifyContent: 'space-between', gap: 'var(--space-l)' }}>
        <div style={{ flex: 1 }}>
          {prev && (
            <Link href={`/ensaios/${prev.slug}`} className='kit-stack' style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>← anterior</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{prev.title}</div>
            </Link>
          )}
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          {next && (
            <Link href={`/ensaios/${next.slug}`} className='kit-stack' style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>próximo →</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{next.title}</div>
            </Link>
          )}
        </div>
      </nav>

      {/* Newsletter */}
      <div style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-3xl)', borderTop: 'var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
        <NewsletterForm title='Não perca o próximo ensaio.' />
      </div>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllIssues().map((i) => ({ params: { slug: i.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const issues = getAllIssues()
  const idx = issues.findIndex((i) => i.slug === params?.slug)
  const strip = ({ content, ...meta }: Issue): IssueMeta => meta
  return {
    props: {
      issue: issues[idx],
      prev: issues[idx + 1] ? strip(issues[idx + 1]) : null,
      next: issues[idx - 1] ? strip(issues[idx - 1]) : null,
    },
  }
}

export default ReadIssue
