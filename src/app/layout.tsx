import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { PropsWithChildren } from 'react'
import { Layout } from '@/app/_components/layout/Layout'
import { SearchProvider } from '@/app/_providers/SearchProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Panics great use',
  description: 'An app for share yor images',
}

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <Layout>{children}</Layout>
        </SearchProvider>
      </body>
    </html>
  )
}

export default RootLayout
