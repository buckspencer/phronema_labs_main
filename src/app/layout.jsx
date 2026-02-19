import '@/styles/tailwind.css'

import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  metadataBase: new URL('https://phronema-labs.com'),
  title: {
    template: '%s - Phronema Labs',
    default: 'Phronema Labs - Boutique Application Development for Growing Businesses',
  },
  description: 'Phronema Labs is a boutique application development agency dedicated to helping small and medium-sized businesses grow through custom software solutions. We combine technical expertise with a deep understanding of business needs.',
  keywords: ['application development', 'custom software', 'web development', 'business solutions', 'boutique agency', 'small business', 'e-commerce', 'automation'],
  authors: [{ name: 'Phronema Labs' }],
  creator: 'Phronema Labs',
  publisher: 'Phronema Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://phronema-labs.com',
    title: 'Phronema Labs - Boutique Application Development for Growing Businesses',
    description: 'We help small and medium-sized businesses grow through custom software solutions. Expert application development, e-commerce platforms, and business automation tools.',
    siteName: 'Phronema Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Phronema Labs - Application Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phronema Labs - Boutique Application Development',
    description: 'Custom software solutions for growing businesses. Expert web development, e-commerce, and automation tools.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function Layout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phronema Labs',
    url: 'https://phronema-labs.com',
    description: 'Boutique application development agency specializing in custom software solutions for growing businesses.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://phronema-labs.com/contact',
    },
    sameAs: [],
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Application Development',
      'Web Development',
      'E-commerce Solutions',
      'Business Automation',
      'Custom Software',
      'API Development',
      'Database Design',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Solutions',
            description: 'Custom online stores and marketplaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Management Tools',
            description: 'Custom dashboards and management systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Customer Portals',
            description: 'Secure platforms for customer interaction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automation Systems',
            description: 'Tools to automate business processes',
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
