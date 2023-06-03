import './globals.css'
import { Roboto, Rubik_Puddles } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '300', '700'], variable: '--font-roboto' })
const puddles = Rubik_Puddles({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-puddles'
})

export const metadata = {
  title: 'Portfolio - Sid Gabriel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  )
}
