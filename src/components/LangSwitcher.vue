<script lang="ts" setup>
import { mdiTranslate } from '@mdi/js';
import { useI18n } from 'vue-i18n';

const { availableLocales, locale } = useI18n();

function toggleLocales() {
    // change to some real logic
    const locales = availableLocales;
    locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
}
</script>

<template>
    <v-icon :icon="mdiTranslate" @click.prevent="toggleLocales" />
</template>
