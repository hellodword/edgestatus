<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <head>
        <title>{{ t('common.title') + ' - ' + t('common.subtitle') }}</title>
    </head>
</template>
