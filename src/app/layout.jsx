import '@/styles/tailwind.css'

import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: {
    template: '%s - Phronema Labs',
    default: 'Phronema Labs - Subscription Consulting and Design',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
