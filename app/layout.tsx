import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Split the G',
  description: 'Join the movement to redefine greatness through the viral Split The G Challenge',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg', // or '/favicon.png' or '/favicon.svg' depending on your file
    // You can also specify different sizes for Apple devices
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
