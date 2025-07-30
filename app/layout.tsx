import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollReveal from '@/components/ScrollReveal'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Kanchen Academy – UPSC · SSC · State PCS',
  description: 'AI-powered coaching with flashcards, quizzes and expert mentoring.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
