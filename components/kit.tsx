// [BTS] tulio — UI-kit primitives (ported from the design prototype)
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useT, useLocale, essaysPath, localizePath } from '../lib/i18n'

const WORDMARK_SRC = '/images/wordmark.png'
const WORDMARK_ASPECT = 182 / 48

export function Logo({ variant = 'wordmark', size = 26 }: { variant?: 'wordmark' | 'mark'; size?: number }) {
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

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  iconRight?: React.ReactNode
  type?: 'button' | 'submit'
  style?: React.CSSProperties
}

export function Button({ variant = 'primary', size = 'md', href, onClick, children, iconRight, type = 'button', style = {} }: ButtonProps) {
  const sizes = { sm: { fontSize: 13, padding: '8px 14px' }, md: { fontSize: 15, padding: '12px 20px' }, lg: { fontSize: 16, padding: '15px 26px' } }
  const variants = {
    primary: { background: 'var(--text-primary)', color: 'var(--text-on-inverse)', borderColor: 'var(--text-primary)' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'transparent' },
  }
  const styles: React.CSSProperties = {
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

export function Tag({ variant = 'outline', children, style = {} }: { variant?: 'outline' | 'solid'; children: React.ReactNode; style?: React.CSSProperties }) {
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

export function Overline({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-overline)', fontWeight: 500,
      letterSpacing: 'var(--tracking-over)', textTransform: 'uppercase', color: 'var(--text-secondary)', ...style,
    }}>{children}</div>
  )
}

export function Divider({ label, align = 'center', style = {} }: { label?: string; align?: 'left' | 'center' | 'right'; style?: React.CSSProperties }) {
  const line: React.CSSProperties = { flex: 1, borderTop: 'var(--hairline)' }
  if (!label) return <hr style={{ border: 'none', borderTop: 'var(--hairline)', margin: 0, ...style }} />
  return (
    <div role='separator' style={{ display: 'flex', alignItems: 'center', gap: 16, ...style }}>
      {align !== 'left' && <span style={line} />}
      <Overline>{label}</Overline>
      {align !== 'right' && <span style={line} />}
    </div>
  )
}

export function Avatar({ initials, size = 44, style = {} }: { initials: string; size?: number; style?: React.CSSProperties }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: 'var(--radius-sm)', border: 'var(--hairline)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      background: 'var(--field-hover)', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)',
      fontWeight: 600, fontSize: Math.round(size * 0.34), ...style,
    }}>{initials}</span>
  )
}

// On an essay page, `altSlug` is the slug of the same essay in the other language (null if untranslated).
export function SiteHeader({ theme, toggleTheme, isEssay = false, altSlug = null }: { theme: string; toggleTheme: () => void; isEssay?: boolean; altSlug?: string | null }) {
  const router = useRouter()
  const t = useT()
  const locale = useLocale()
  const otherLocale = locale === 'en' ? 'pt-BR' : 'en'
  const switchHref = isEssay ? essaysPath(otherLocale, altSlug ?? undefined) : localizePath(router.asPath, otherLocale)
  const NAV = [
    { href: essaysPath(locale), label: t.nav.essays },
    { href: '/projetos', label: t.nav.projects },
    { href: '/sobre', label: t.nav.about },
    { href: '/newsletter', label: t.nav.newsletter },
  ]
  const ctrl: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)',
    background: 'transparent', border: 'var(--hairline)', borderRadius: 'var(--radius-sm)',
    padding: '5px 9px', cursor: 'pointer', lineHeight: 1, textDecoration: 'none',
  }
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
            const path = router.asPath.split(/[?#]/)[0]
            const active = path === n.href || path.startsWith(n.href + '/')
            return (
              <Link key={n.href} href={n.href} className='kit-navlink'
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.01em',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: active ? 'underline' : 'none', textUnderlineOffset: '0.28em',
                }}>{n.label}</Link>
            )
          })}
          <Link href={switchHref} locale={otherLocale} className='kit-navlink'
            aria-label={t.lang.switchLabel} title={t.lang.switchLabel} style={ctrl}>[{t.lang.switchTo}]</Link>
          <button onClick={toggleTheme} aria-label={t.theme.toggle} style={ctrl}>
            {theme === 'dark' ? t.theme.light : t.theme.dark}
          </button>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const t = useT()
  const PILLARS = t.pillars
  return (
    <footer style={{ borderTop: 'var(--hairline)', marginTop: 'var(--space-4xl)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'var(--space-2xl) var(--gutter)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xl)', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '32ch' }}>
          <Logo size={26} />
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 14, lineHeight: 1.5 }}>
            {t.footer.tagline}
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
        [BTS] tulio · © 2026 · {t.footer.colophon}
      </div>
    </footer>
  )
}
