import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Overline } from '../../components/kit'
import { useT, useLocale } from '../../lib/i18n'

export default function Studio3D() {
  const t = useT().studio
  const locale = useLocale()
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(28px,5vw,64px) var(--gutter) 0' }}>
      <Head>
        <title>{`${t.pageTitle} — [BTS] tulio`}</title>
        <meta name='description' content={t.description} />
        <link rel='canonical' href={`https://tuliofaria.dev${locale === 'en' ? '/en' : ''}/projetos/estudio-3d/`} />
        <meta property='og:title' content={t.ogTitle} />
        <meta property='og:description' content={t.ogDescription} />
        <meta property='og:image' content='https://tuliofaria.dev/estudio-3d/preview.png' />
      </Head>
      <Overline>{t.overline}</Overline>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '12px 0 16px' }}>{t.title}</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '58ch', lineHeight: 1.5 }}>{t.intro}</p>
      <iframe
        src={locale === 'en' ? '/estudio-3d/viewer.html?lang=en' : '/estudio-3d/viewer.html'}
        title={t.iframeTitle}
        allow='fullscreen'
        style={{ display: 'block', width: '100%', height: 'clamp(480px,76dvh,900px)', border: 'var(--hairline)', borderRadius: 'var(--radius-md)', background: '#12171f', marginTop: 28 }}
      />
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6, margin: '16px 0 32px' }}>
        {t.credits}{' '}
        <a href='/estudio-3d/preview.png'>{t.viewImage}</a> · <Link href='/projetos'>{t.allProjects}</Link>
      </p>
    </div>
  )
}
