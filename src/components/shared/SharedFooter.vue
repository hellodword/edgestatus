<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <v-footer class="d-flex flex-column" :height="50">
        <div class="px-4 py-2 bg-grey text-center w-100">
            {{ new Date().getFullYear() }} —
            <strong>{{ t('common.title') }}</strong>
        </div>
    </v-footer>
</template>

<style>
.v-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
