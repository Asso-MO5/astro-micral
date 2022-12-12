import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: 'https://Asso-MO5.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : '/astro-micral',
})
