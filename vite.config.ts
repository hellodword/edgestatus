import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import Info from 'vite-plugin-info';
import Inspect from 'vite-plugin-inspect';
import CloudflarePagesFunctions from 'vite-plugin-cloudflare-functions';

export default defineConfig({
  plugins: [
    vue(),
    Info(),
    Inspect(),
    CloudflarePagesFunctions({
      root: './src/functions',
      outDir: './',
      wrangler: { log: true, kv: 'EDGESTATUS', binding: { SOMEKEY: 'some value' } }
    })
  ]
});
