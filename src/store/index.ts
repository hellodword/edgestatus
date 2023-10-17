import { createPinia, defineStore } from 'pinia';

const store = createPinia();

export { store };

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
