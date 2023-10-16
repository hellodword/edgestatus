<script lang="ts" setup>
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
    <button @click.prevent="toggleLocales">
        <!-- <div i-carbon-language /> -->
    </button>
</template>

<style>
button {
    width: 30px;
    height: 30px;
}
</style>
