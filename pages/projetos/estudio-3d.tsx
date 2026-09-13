import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Overline } from '../../components/kit'

export default function Studio3D() {
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(28px,5vw,64px) var(--gutter) 0' }}>
      <Head>
        <title>Estúdio 3D — [BTS] tulio</title>
        <meta name='description' content='Explore o estúdio DevPleno em 3D: gire a cena, aproxime os detalhes e veja o espaço por diferentes ângulos.' />
        <link rel='canonical' href='https://tuliofaria.dev/projetos/estudio-3d/' />
        <meta property='og:title' content='Estúdio DevPleno em 3D' />
        <meta property='og:description' content='Uma visita interativa aos bastidores de onde nascem os vídeos e projetos.' />
        <meta property='og:image' content='https://tuliofaria.dev/estudio-3d/preview.png' />
      </Head>
      <Overline>Projeto · Experimento</Overline>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '12px 0 16px' }}>Entre no estúdio.</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '58ch', lineHeight: 1.5 }}>Uma versão em miniatura do estúdio DevPleno. Arraste para girar, aproxime os detalhes e experimente as diferentes vistas.</p>
      <iframe
        src='/estudio-3d/viewer.html'
        title='Estúdio DevPleno — visualizador 3D interativo'
        allow='fullscreen'
        style={{ display: 'block', width: '100%', height: 'clamp(480px,76dvh,900px)', border: 'var(--hairline)', borderRadius: 'var(--radius-md)', background: '#12171f', marginTop: 28 }}
      />
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6, margin: '16px 0 32px' }}>
        Reconstrução aproximada a partir de fotos, com Blender, Higgsfield e Three.js. Algumas artes e detalhes foram reinterpretados.{' '}
        <a href='/estudio-3d/preview.png'>Ver imagem da cena</a> · <Link href='/projetos'>Todos os projetos</Link>
      </p>
    </div>
  )
}
