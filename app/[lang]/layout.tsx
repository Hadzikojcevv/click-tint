import { Locale, i18n } from '@/i18n.config'
import type { Metadata } from 'next'
import Header from './components/header'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Footer from './components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click-Tint',
  description: 'Click Tint - Smart Tint Foil for Ordinary Windows',
  keywords: ["Ηλεκτρονικά στόρια", "Στόρια", "Παντζούρι", "ΠαντζούριαΠαράθυρο", "Έξυπνο", "Παράθυρο", "Έξυπνο γυαλί",  "Έξυπνο τζάμι", "Παράθυρο", "Ηλεκτρονικά Παράθυρα", "Ηλεκτρικό Παράθυρο", "Smart glass", "Smart tint", "Smart windows PDLC FOIL ","PDLC SELF ADHESIVE FOIL", "PDLC ADHESIVE SMART FILM", "SMART GLASS TECHNOLOGY", "Паметно Стакло", "PDLC фолија", "ПДЛЦ", "ролетни", "завеси", "прозорци", "паметни прозорци", "врати", "приватност", "стакло", "ординација", "ординации", "хотели", "банки", "банка", "сигурност", "приватност на клик", "приватност"],
  alternates: {
    canonical: 'https://click-tint.com/en'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  return (
    <html lang={params.lang}>
    <Analytics />
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}