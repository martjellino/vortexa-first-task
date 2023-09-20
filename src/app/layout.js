import { RootProvider } from '@/components/Provider/RootProvider'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><RootProvider>{children}</RootProvider></body>
    </html>
  )
}
