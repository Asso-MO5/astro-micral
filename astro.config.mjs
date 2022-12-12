import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import { BASE_URL } from './src/utils/constants'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: 'https://Asso-MO5.github.io',
  base: BASE_URL,
})
