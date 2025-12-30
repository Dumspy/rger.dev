import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon()],
    output: 'static',
    adapter: vercel({
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
