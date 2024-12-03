import { defineStore } from "pinia";
import { ref } from "vue";
import { make_get } from "../utils/server";
import { IApiResonse } from "../utils/interfaces";

export const useApiGet = defineStore('api', () => {
    const data = ref<IApiResonse | undefined>(undefined);

    async function fetch_data(collection: string, id: string) {
        data.value = await make_get(collection, id)
    }

    return {
        data,
        fetch_data
    };
});