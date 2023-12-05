import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Dami's blog",
  description: 'Created by Dami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 text-white">
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
