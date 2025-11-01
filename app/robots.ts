import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/404']
        },
        sitemap: 'https://your-domain.com/sitemap.xml',
        host: 'https://your-domain.com'
    }
}
