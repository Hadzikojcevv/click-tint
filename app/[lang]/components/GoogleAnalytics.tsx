'use client'

import Script from 'next/script'
// import * as gtag from '../gtag.js'

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=AW-16646284413'
      />
       <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16646284413');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
