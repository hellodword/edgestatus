<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const now = import.meta.env.VITE_APP_BUILD_TIME;
console.log(now);
const buildDate = new Date(Number.parseInt(now) * 1000).toLocaleString();
</script>

<template>
    <v-col class="text-center text-truncate mt-4" cols="12">
        {{ t('common.buildAt') }} {{ buildDate }}
    </v-col>
</template>
