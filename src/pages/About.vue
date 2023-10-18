<script lang="ts" setup>
import now from '~build/time';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <v-col class="text-center text-truncate mt-4" cols="12">
        {{ t('common.buildAt') }} {{ now.toLocaleString() }}
    </v-col>
</template>
