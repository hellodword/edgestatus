<script lang="ts" setup>
import { ref } from 'vue';
import now from '~build/time';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const links = ref(['home', 'about', 'services', 'contact']);
</script>

<template>
    <v-footer class="bg-grey-lighten-1" id="footer" :height="100">
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                variant="text"
                class="mx-2"
                rounded="xl"
            >
                {{ t(`common.${link}`) }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ t('common.buildAt') }} {{ now.toLocaleString() }} —
                <strong>{{ t('common.title') }}</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style>
#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
