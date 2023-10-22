<script setup lang="ts">
import { ref, watch } from 'vue';
import { hc } from 'hono/client';

import { basePath, type AppType } from '@functions/api/[[route]]';
import { useEndpointStore } from '@/store/endpoint';

const endpoint = useEndpointStore();

const client = hc<AppType>('/');

const response = ref();
const message = ref<string>('');
const rules = [(value: string) => value.length > 0 || 'Required.'];

watch(
    endpoint,
    async (endpoint) => {
        response.value = {};
        message.value = '';

        client.api[':msg']
            .$get({
                param: {
                    msg: endpoint.value,
                },
            })
            .then(async (resp) => {
                response.value = await resp.json();
                message.value = response.value.data;
            })
            .catch((err) => {
                throw err;
            });
    },
    { immediate: true },
);
</script>

<template>
    <v-container fluid>
        <v-card width="95%" class="mx-auto mt-4">
            <v-text-field
                label="Endpoint"
                hide-details="auto"
                :rules="rules"
                v-model="endpoint.value"
                class="mx-4 my-2"
            >
                <template v-slot:prepend>
                    <span>{{ basePath }}</span>
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
</template>

<style>
.v-card {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: inherit;
}
</style>
