<script lang="ts" setup>
import { ref } from 'vue';
import now from '~build/time';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const router = useRouter();
const { t } = useI18n();

const goTo = async (path: string) => {
    console.log('goTo', path);
    await router.push(path);
};

const links = ref([
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
]);
</script>

<template>
    <v-footer class="bg-grey-lighten-1" id="footer" :height="100">
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link.key"
                color="white"
                variant="text"
                class="mx-2"
                rounded="xl"
                @click="goTo(link.path)"
            >
                {{ t(`common.${link.key}`) }}
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
