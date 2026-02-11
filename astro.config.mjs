import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';

export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        {
          './src/components/*.astro': [],
        },
      ],
    }),
  ],
});
