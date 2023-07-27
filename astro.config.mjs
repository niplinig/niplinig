import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://niplinig.deno.dev',
  integrations: [sitemap(), alpinejs()]
});