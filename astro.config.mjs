import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sitemap(), tailwind()],
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
