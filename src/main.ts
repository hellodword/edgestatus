import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import App from '@/App.vue';
import { i18n } from '@/i18n';
import { router } from '@/router';
import { store } from '@/store';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'light',
    },
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(vuetify);

app.mount('#app');
