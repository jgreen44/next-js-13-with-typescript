import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Header } from './components/Header'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Green Media',
  description: 'Web development and design',
  keywords:
    'web development, web design, javascript, typescript, react, node, angular, vue, html, css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className={'container'}> {children}</main>
      </body>
    </html>
  )
}
