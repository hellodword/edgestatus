<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { mdiEmail, mdiInformation, mdiTranslate } from '@mdi/js';

import logo from '@/assets/images/logo.svg';

const { availableLocales, locale, t } = useI18n();
const router = useRouter();

const goTo = async (path: string) => {
    console.log('goTo', path);
    await router.push(path);
};

function toggleLocales() {
    // change to some real logic
    const locales = availableLocales;
    locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
}

const drawer = ref(true);
</script>
<template>
    <v-navigation-drawer :rail="true" permanent>
        <v-list>
            <v-list-item
                v-model="drawer"
                :prepend-avatar="logo"
                :title="t('common.title')"
                :subtitle="t('common.subtitle')"
                @click="goTo('/')"
            >
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-tooltip location="end">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        :prepend-icon="mdiInformation"
                        :title="t('common.about')"
                        @click="goTo('/about')"
                    ></v-list-item>
                </template>
                <span>{{ t('common.about') }}</span>
            </v-tooltip>

            <v-tooltip location="end">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        :prepend-icon="mdiEmail"
                        :title="t('common.contact')"
                        @click="goTo('/contact')"
                    ></v-list-item>
                </template>
                <span>{{ t('common.contact') }}</span>
            </v-tooltip>

            <v-tooltip location="end">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        :prepend-icon="mdiTranslate"
                        :title="t('common.translate')"
                        @click="toggleLocales"
                    ></v-list-item>
                </template>
                <span>{{ t('common.translate') }}</span>
            </v-tooltip>
        </v-list>
    </v-navigation-drawer>
</template>
