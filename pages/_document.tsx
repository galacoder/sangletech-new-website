import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'
import { GTM_ID } from '../lib/gtm'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/favicon-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />

            {/* Google Tag Manager */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`
              }}
            />
            {/* End Google Tag Manager */}
          </Head>

          <body>
            <script src='noflash.js' />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
