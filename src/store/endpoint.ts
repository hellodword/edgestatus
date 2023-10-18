import { defineStore } from 'pinia';

export const useEndpointStore = defineStore({
    id: 'endpoint',
    state: () => {
        return {
            value: 'world',
        };
    },
    actions: {
        updateUser(endpoint: string) {
            this.value = endpoint;
        },
    },
});
