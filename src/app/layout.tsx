import './globals.css'
import { Noto_Sans_Adlam } from 'next/font/google'

const NotoSansAdlam = Noto_Sans_Adlam({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-noto' })


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
      <body className={`${NotoSansAdlam.className} font-noto`}>{children}</body>
    </html>
  )
}
