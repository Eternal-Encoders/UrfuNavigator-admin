import { defineStore } from "pinia";
import { ref } from "vue";
import { make_get_all } from "../utils/server";
import { IApiResonse } from "../utils/interfaces";

export const useApiGetAll = defineStore('api_get_all', () => {
    const data = ref<IApiResonse[]>([]);

    async function fetch_data(collection: string) {
        data.value = await make_get_all(collection)
    }

    return {
        data,
        fetch_data
    };
});