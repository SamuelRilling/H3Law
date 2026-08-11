import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Public_Sans, Source_Serif_4 } from 'next/font/google'
import { BASE_PATH } from '@/lib/base-path'
import './globals.css'

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['300', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'H2Law | Defendemos tu agua',
  description:
    'H2Law es un estudio jurídico especializado en derecho de aguas en Chile: derechos de aprovechamiento, regularizaciones, escrituras y defensa ante la DGA.',
  icons: {
    icon: `${BASE_PATH}/icon.svg`,
    apple: `${BASE_PATH}/images/h2law-logo.jpg`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${publicSans.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
