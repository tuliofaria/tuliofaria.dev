// [BTS] tulio — UI-kit primitives (ported from the design prototype)
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PILLARS } from '../data/site'

const WORDMARK_SRC = 'data:image/png;base64,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'
const WORDMARK_ASPECT = 182 / 48

export function Logo({ variant = 'wordmark', size = 26 }) {
  const inner =
    variant === 'mark' ? (
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '-0.04em', fontSize: size, lineHeight: 1 }}>[&nbsp;]</span>
    ) : (
      <span role='img' aria-label='[BTS] tulio' style={{
        display: 'inline-block', height: size, width: size * WORDMARK_ASPECT, background: 'currentColor',
        WebkitMaskImage: `url("${WORDMARK_SRC}")`, maskImage: `url("${WORDMARK_SRC}")`,
        WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'left center', maskPosition: 'left center',
      }} />
    )
  return (
    <Link href='/' style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
      aria-label='[BTS] tulio'>{inner}</Link>
  )
}

export function Button({ variant = 'primary', size = 'md', href, onClick, children, iconRight, type = 'button', style = {} }) {
  const sizes = { sm: { fontSize: 13, padding: '8px 14px' }, md: { fontSize: 15, padding: '12px 20px' }, lg: { fontSize: 16, padding: '15px 26px' } }
  const variants = {
    primary: { background: 'var(--text-primary)', color: 'var(--text-on-inverse)', borderColor: 'var(--text-primary)' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'transparent' },
  }
  const styles = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '0.02em', lineHeight: 1,
    borderRadius: 'var(--radius-sm)', border: '1px solid transparent', cursor: 'pointer',
    textDecoration: 'none', transition: 'all var(--dur-fast) var(--ease-standard)', whiteSpace: 'nowrap',
    ...sizes[size], ...variants[variant], ...style,
  }
  const content = <>{children}{iconRight && <span>{iconRight}</span>}</>
  if (href) {
    return <Link href={href} className={`kit-btn kit-btn--${variant}`} style={styles}>{content}</Link>
  }
  return (
    <button type={type} onClick={onClick} className={`kit-btn kit-btn--${variant}`} style={styles}>{content}</button>
  )
}

export function Tag({ variant = 'outline', children, style = {} }) {
  const variants = {
    outline: { border: 'var(--hairline)', color: 'var(--text-secondary)', background: 'transparent' },
    solid: { background: 'var(--text-primary)', color: 'var(--text-on-inverse)', border: '1px solid var(--text-primary)' },
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11.5,
      fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1,
      padding: '5px 9px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', ...variants[variant], ...style,
    }}>{children}</span>
  )
}

export function Overline({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-overline)', fontWeight: 500,
      letterSpacing: 'var(--tracking-over)', textTransform: 'uppercase', color: 'var(--text-secondary)', ...style,
    }}>{children}</div>
  )
}

export function Divider({ label, align = 'center', style = {} }) {
  const line = { flex: 1, borderTop: 'var(--hairline)' }
  if (!label) return <hr style={{ border: 'none', borderTop: 'var(--hairline)', margin: 0, ...style }} />
  return (
    <div role='separator' style={{ display: 'flex', alignItems: 'center', gap: 16, ...style }}>
      {align !== 'left' && <span style={line} />}
      <Overline>{label}</Overline>
      {align !== 'right' && <span style={line} />}
    </div>
  )
}

export function Avatar({ initials, size = 44, style = {} }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: 'var(--radius-sm)', border: 'var(--hairline)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      background: 'var(--field-hover)', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)',
      fontWeight: 600, fontSize: Math.round(size * 0.34), ...style,
    }}>{initials}</span>
  )
}

const NAV = [
  { href: '/ensaios', label: 'ensaios' },
  { href: '/projetos', label: 'projetos' },
  { href: '/sobre', label: 'sobre' },
  { href: '/newsletter', label: 'newsletter' },
]

export function SiteHeader({ theme, toggleTheme }) {
  const router = useRouter()
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--surface-page) 88%, transparent)',
      backdropFilter: 'saturate(120%) blur(8px)', borderBottom: 'var(--hairline)',
    }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '16px var(--gutter)', display: 'flex', alignItems: 'center', gap: 'var(--space-l)' }}>
        <Logo size={24} />
        <span style={{ flex: 1 }} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-l)', flexWrap: 'wrap' }}>
          {NAV.map((n) => {
            const active = router.pathname === n.href || router.pathname.startsWith(n.href + '/')
            return (
              <Link key={n.href} href={n.href} className='kit-navlink'
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.01em',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: active ? 'underline' : 'none', textUnderlineOffset: '0.28em',
                }}>{n.label}</Link>
            )
          })}
          <button onClick={toggleTheme} aria-label='Alternar tema'
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)',
              background: 'transparent', border: 'var(--hairline)', borderRadius: 'var(--radius-sm)',
              padding: '5px 9px', cursor: 'pointer', lineHeight: 1,
            }}>{theme === 'dark' ? '[claro]' : '[escuro]'}</button>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer style={{ borderTop: 'var(--hairline)', marginTop: 'var(--space-4xl)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'var(--space-2xl) var(--gutter)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xl)', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '32ch' }}>
          <Logo size={26} />
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 14, lineHeight: 1.5 }}>
            Bastidores reais de quem constrói. Conteúdo sobre criação, produto, tecnologia e marca pessoal.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {PILLARS.map((p, i) => (
            <span key={p} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
              {p}{i < PILLARS.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'var(--space-m) var(--gutter) var(--space-2xl)', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
        [BTS] tulio · © 2026 · feito com respiro
      </div>
    </footer>
  )
}
