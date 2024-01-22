import { Locale, i18n } from '@/i18n.config'
import type { Metadata } from 'next'
import Header from './components/header'
import './globals.css'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import Footer from './components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click-Tint',
  description: 'Click Tint - Smart Tint Foil for Ordinary Windows'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale.key }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang.key}>
      <Head>
        <title>Click-Tint</title>
        <meta name='description' content='This is a description of my page.' />
      </Head>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}
