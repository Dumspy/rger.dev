import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercelStatic from '@astrojs/vercel/static'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon()],
    output: 'static',
    adapter: vercelStatic({
        webAnalytics: {
            enabled: true,
        },
        speedInsights: {
            enabled: true,
        },
        imageService: true,
        devImageService: 'sharp',
    }),
})
