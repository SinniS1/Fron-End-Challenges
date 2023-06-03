import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Pagination Project',
  description: 'Machine coding round practice for pagination with next js 13 & typescript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
