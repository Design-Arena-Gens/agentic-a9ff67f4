import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dorksense',
  description: 'Extreme neobrutalist design experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
