<script setup lang="ts">
import now from '~build/time';

import { ref, watch } from 'vue';

import { hc } from 'hono/client';
import type { AppType } from '../functions/api/[[route]]';

const client = hc<AppType>('/').api;

const endpoint = ref('world');

const message: any = ref<object>({});

const response = ref();

watch(
    endpoint,
    async (endpoint) => {
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
    <div text-xl flex justify-center my8>
        <div space-y-4 max-w="80vw">
            <h1 text-2xl font-bold pb4 border="b-1 base">
                Vite & Cloudflare Functions
            </h1>
            <div flex justify-start items-center>
                <span mr2 text-base-500>Endpoint:</span
                ><span mr1 font-bold>/api/</span
                ><input
                    type="text"
                    id="endpoint"
                    v-model="endpoint"
                    class="font-bold"
                />
            </div>
            <div>
                <span text-base-500>Message: </span
                ><span font-bold>{{ message }}</span>
            </div>
            <div v-if="response">
                <span text-base-500>Response: </span>
                <pre overflow-x-auto max-w="80vw">{{
                    JSON.stringify(response, null, 2)
                }}</pre>
            </div>
            <div text-base-500 border="t-1 base" pt4>
                Build at: {{ now.toLocaleString() }}
            </div>
        </div>
    </div>
</template>
