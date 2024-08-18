import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  experimental: {
    serverIslands: true
  },
  integrations: [react()],
  adapter: netlify({    cacheOnDemandPages: true  })
});