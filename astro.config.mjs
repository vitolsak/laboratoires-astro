import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ZMĚNA 1: Přepnuto na 'static'
  output: 'static', 

  // ZMĚNA 2: Adaptér pro statický web není potřeba, smažeme ho
  // adapter: netlify(), 

  integrations: [tailwind()]
});