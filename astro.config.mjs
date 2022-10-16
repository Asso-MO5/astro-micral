import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(),svelte()]
});