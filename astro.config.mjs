import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelEdge from '@astrojs/vercel/edge';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercelEdge({
    webAnalytics: {
      enabled: true,
    }
  }),
});