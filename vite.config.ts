import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import Info from 'vite-plugin-info';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [
    vue(),
    Info(),
    Inspect(),
  ]
});
