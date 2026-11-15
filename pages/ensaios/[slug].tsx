// [BTS] tulio — Read an issue / ensaio (blog-post reader)
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown, { type Components } from 'react-markdown'
import { getAllIssues, getAltSlug, type Issue, type IssueMeta } from '../../lib/ensaios'
import { Overline, Tag } from '../../components/kit'
import { NewsletterForm, PullQuote } from '../../components/content'
import { useT, useLocale, essaysPath, LOCALES } from '../../lib/i18n'
import { issueUrl } from '../../lib/site'

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
  // The base rule strips link styling (color: inherit, no underline), so body links mark themselves.
  a: ({ href, children }) => {
    const external = /^https?:/.test(href || '')
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: 1, textUnderlineOffset: '0.18em' }}>{children}</a>
    )
  },
  // Essay images: fit the text column instead of overflowing it.
  img: ({ src, alt }) => (
    <img src={typeof src === 'string' ? src : undefined} alt={alt || ''} loading='lazy'
      style={{ display: 'block', width: '100%', height: 'auto', margin: '0 0 var(--space-l)', borderRadius: 8 }} />
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
  // Slug of the same essay in the other language (null if untranslated).
  altSlug: string | null
}

const ReadIssue = ({ issue, prev, next, altSlug }: ReadIssueProps) => {
  const t = useT().essays
  const locale = useLocale()
  // Slug per language, so canonical and hreflang point at the right URL in each one.
  const ptSlug = locale === 'en' ? altSlug : issue.slug
  const enSlug = locale === 'en' ? issue.slug : altSlug
  const selfUrl = issueUrl(locale, issue.slug)
  const title = `${issue.title} — [BTS] tulio`
  return (
    <article style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(32px,5vw,64px) var(--gutter) 0' }}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={issue.excerpt} />
        <link rel='canonical' href={selfUrl} />
        {ptSlug && <link rel='alternate' hrefLang='pt-BR' href={issueUrl('pt-BR', ptSlug)} />}
        {enSlug && <link rel='alternate' hrefLang='en' href={issueUrl('en', enSlug)} />}
        {ptSlug && <link rel='alternate' hrefLang='x-default' href={issueUrl('pt-BR', ptSlug)} />}
        <meta property='og:type' content='article' />
        <meta property='og:title' content={issue.title} />
        <meta property='og:description' content={issue.excerpt} />
        <meta property='og:url' content={selfUrl} />
      </Head>
      <Link href={essaysPath(locale)} className='kit-navlink'
        style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
        {t.back}
      </Link>

      {/* Header */}
      <header style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-xl)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Overline>{issue.n}</Overline>
          <span style={{ color: 'var(--border-hairline)' }}>·</span>
          {issue.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
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
              {issue.date} · {t.read(issue.read)}
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
            <Link href={essaysPath(locale, prev.slug)} className='kit-stack' style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{t.prev}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{prev.title}</div>
            </Link>
          )}
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          {next && (
            <Link href={essaysPath(locale, next.slug)} className='kit-stack' style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{t.next}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{next.title}</div>
            </Link>
          )}
        </div>
      </nav>

      {/* Newsletter */}
      <div style={{ maxWidth: 'var(--measure)', marginTop: 'var(--space-3xl)', borderTop: 'var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
        <NewsletterForm title={t.newsletterTitle} />
      </div>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: LOCALES.flatMap((locale) => getAllIssues(locale).map((i) => ({ params: { slug: i.slug }, locale }))),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const issues = getAllIssues(locale)
  const idx = issues.findIndex((i) => i.slug === params?.slug)
  const strip = ({ content, ...meta }: Issue): IssueMeta => meta
  return {
    props: {
      issue: issues[idx],
      prev: issues[idx + 1] ? strip(issues[idx + 1]) : null,
      next: issues[idx - 1] ? strip(issues[idx - 1]) : null,
      altSlug: getAltSlug(locale, params?.slug as string),
    },
  }
}

export default ReadIssue
