import './globals.css'
import { Noto_Sans } from 'next/font/google'

const NotoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-noto' })


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
      <body className={`${NotoSans.className} font-noto`}>{children}</body>
    </html>
  )
}
