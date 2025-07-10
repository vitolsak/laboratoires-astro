import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Tato řádka je klíčová
  adapter: netlify(), // Tato řádka říká, jak se má web "zabalit" pro Netlify
  integrations: [tailwind()]
});