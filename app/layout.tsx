import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
export const metadata: Metadata = {
  title: 'Alpha Enterprises - Healthcare & Lifestyle Coaching',

  description:
    'Transform your health and life with personalized nutrition, fitness, and lifestyle coaching.',

  keywords: [
    'nutritionist',
    'fitness coach',
    'dietician',
    'healthcare coaching',
    'gym trainer',
    'wellness',
    'Alpha Enterprises',
  ],

  authors: [{ name: 'Alpha Enterprises' }],

  creator: 'Alpha Enterprises',

  publisher: 'Alpha Enterprises',

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "pMZGLC_Q2Tp-GrzTVVcxvphspOORZiXvTUKiC6uOW0k",
  },

  openGraph: {
    title: 'Alpha Enterprises',
    description:
      'Transform your health and life with personalized coaching.',

    url: 'https://alphaenterprise.netlify.app',

    siteName: 'Alpha Enterprises',

    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Enterprises',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Enterprises',
    description:
      'Personalized nutrition and fitness coaching platform.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}