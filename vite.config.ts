import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import Info from 'vite-plugin-info';
import Inspect from 'vite-plugin-inspect';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig({
    plugins: [
        vue(),
        Info(),
        Inspect(),
        VueI18nPlugin({
            runtimeOnly: true,
            compositionOnly: true,
            include: [resolve(__dirname, 'locales/**')],
        }),
    ],
});
