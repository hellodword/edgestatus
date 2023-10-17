<script setup lang="ts">
import { ref, watch } from 'vue';
import { hc } from 'hono/client';

import type { AppType } from '@functions/api/[[route]]';
import NavigationDrawer from '@/components/shared/NavigationDrawer.vue';
import SharedFooter from '@/components/shared/SharedFooter.vue';
import SharedHeader from './components/shared/SharedHeader.vue';

const client = hc<AppType>('/').api;

const endpoint = ref('world');
const response = ref();
const message = ref<string>('');
const rules = [(value: string) => value.length > 0 || 'Required.'];

watch(
    endpoint,
    async (endpoint) => {
        response.value = {};
        message.value = '';

        if (endpoint.startsWith('state/')) {
            client.state[':key']
                .$get({
                    param: {
                        key: endpoint.replace(/^state\//, ''),
                    },
                })
                .then(async (resp) => {
                    response.value = await resp.json();
                    message.value = response.value.data;
                })
                .catch((err) => {
                    throw err;
                });
        } else {
            client[':msg']
                .$get({
                    param: {
                        msg: endpoint,
                    },
                })
                .then(async (resp) => {
                    response.value = await resp.json();
                    message.value = response.value.data;
                })
                .catch((err) => {
                    throw err;
                });
        }
    },
    { immediate: true },
);
</script>

<template>
    <v-app id="inspire">
        <v-layout>
            <SharedHeader />
            <NavigationDrawer />

            <v-main>
                <v-container fluid>
                    <v-card width="95%" class="mx-auto mt-4">
                        <v-text-field
                            label="Endpoint"
                            hide-details="auto"
                            :rules="rules"
                            v-model="endpoint"
                            class="mx-4 my-2"
                        >
                            <template v-slot:prepend>
                                <span>/api/</span>
                            </template>
                        </v-text-field>
                    </v-card>

                    <v-card
                        v-if="message"
                        width="95%"
                        title="Message"
                        :text="message"
                        class="mx-auto my-2"
                    ></v-card>

                    <v-card
                        v-if="response"
                        width="95%"
                        title="Response"
                        :text="JSON.stringify(response, null, 2)"
                        class="mx-auto my-2"
                    ></v-card>
                </v-container>
            </v-main>
            <SharedFooter />
        </v-layout>
    </v-app>
</template>

<style>
.v-card {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: inherit;
}

.v-main {
    max-height: calc(100vh - 100px);
    overflow-y: auto;
}
</style>
