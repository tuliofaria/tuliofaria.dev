import { Html, Head, Main, NextScript } from 'next/document'

// Applies the saved theme before first paint to avoid a light-mode flash.
const themeInit = `(function(){try{var t=JSON.parse(localStorage.getItem('bts-tulio')||'{}').theme;if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`

export default function MyDocument() {
  return (
    <Html lang='pt-br' data-theme='light'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap' rel='stylesheet' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#F5F0E6' />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
