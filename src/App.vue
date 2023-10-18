<script setup lang="ts">
import NavigationDrawer from '@/components/shared/NavigationDrawer.vue';
import SharedFooter from '@/components/shared/SharedFooter.vue';
import SharedHeader from './components/shared/SharedHeader.vue';
</script>

<template>
    <v-app id="inspire">
        <v-layout>
            <SharedHeader />
            <NavigationDrawer />

            <v-main>
                <RouterView />
            </v-main>
            <SharedFooter />
        </v-layout>
    </v-app>
</template>

<style>
.v-main {
    max-height: calc(100vh - 50px);
    overflow-y: auto;
}
</style>
