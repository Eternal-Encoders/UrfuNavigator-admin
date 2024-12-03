<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useApiGet } from '../store/ApiGet';
import { computed } from 'vue';
import { db_router } from '../utils/const';
import { inputTypes } from '../utils/interfaces';

const route = useRoute();
const getApi = useApiGet();

const routerData = computed(() => {
    return db_router.find((e) => e[0] == route.params.coll)
})

getApi.fetch_data(route.params.coll as string, route.params.id as string)
</script>

<template>
    <v-container 
        v-if="routerData && getApi.data"
        fluid
    >
        <v-row
            v-for="(field, i) in routerData[2]"
            :key="i"
        >
            <v-text-field
                v-if="(field.inputType as inputTypes) == 'text'"
                :label="i"
                :model-value="getApi.data[i]"
            />
            <v-textarea
                v-if="(field.inputType as inputTypes) == 'json'"
                :label="i"
                :model-value="getApi.data[i]"
            />
            <v-text-field
                v-if="(field.inputType as inputTypes) == 'number'"
                type="number"
                :label="i"
                :model-value="getApi.data[i]"
            />
        </v-row>
    </v-container>
</template>