import type { Metadata } from 'next'
import { Fraunces, Work_Sans } from 'next/font/google'
import './globals.css'
import { profile } from './content'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.title,
  description: profile.description,
  openGraph: {
    title: profile.title,
    description: profile.description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
