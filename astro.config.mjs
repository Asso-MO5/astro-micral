import { defineConfig } from 'astro/config'
// https://astro.build/config
export default defineConfig({
  site: 'https://Asso-MO5.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : '/astro-micral',
})
