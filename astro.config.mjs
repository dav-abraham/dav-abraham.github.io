import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';

export default defineConfig({
  // 1. Adicione a URL do seu novo domínio aqui
  site: 'https://dav-abraham.github.io',
  
  // 2. Como o repositório tem o mesmo nome do usuário, a base é '/'
  base: '/',

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