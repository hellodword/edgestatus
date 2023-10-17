<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { mdiChevronLeft, mdiTranslate } from '@mdi/js';

import logo from '@/assets/images/logo.svg';

const { availableLocales, locale, t } = useI18n();
const router = useRouter();

const goToHome = async () => {
    console.log('goToHome');
    await router.push('/');
};

function toggleLocales() {
    // change to some real logic
    const locales = availableLocales;
    locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
}

const rail = ref(true);
const drawer = ref(true);
</script>
<template>
    <v-navigation-drawer :rail="rail" permanent @click="rail = false">
        <v-list>
            <v-list-item
                v-model="drawer"
                :prepend-avatar="logo"
                :title="t('common.title')"
                :subtitle="t('common.subtitle')"
                @click="rail == false && goToHome()"
            >
                <template v-slot:append>
                    <v-btn
                        variant="text"
                        :icon="mdiChevronLeft"
                        @click.stop="rail = !rail"
                    ></v-btn>
                </template>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item
                :prepend-icon="mdiTranslate"
                :title="t('common.translate')"
                @click="rail == false && toggleLocales()"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
