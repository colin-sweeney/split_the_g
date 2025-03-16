import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Split the G',
  description: 'Join the movement to redefine greatness through the viral Split The G Challenge',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
