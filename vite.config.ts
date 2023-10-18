import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import Inspect from 'vite-plugin-inspect';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@functions': resolve(__dirname, 'functions'),
        },
    },
    plugins: [
        vue(),
        Inspect(),
        VueI18nPlugin({
            runtimeOnly: true,
            compositionOnly: true,
            include: [resolve(__dirname, 'locales/**')],
        }),
    ],
});
