import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/profesori', '/cursanti', '/cursuri', '/abonamente', '/autodidact', '/cereri', '/invata', '/parinte', '/api/'],
      },
    ],
    sitemap: 'https://codemakerclub.ro/sitemap.xml',
  }
}
