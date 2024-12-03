<script setup lang="ts">
import { capitalize, computed, ref } from 'vue';
import { useApiGetAll } from '../store/ApiGetAll';
import { useRoute, useRouter } from 'vue-router';
import { db_router } from '../utils/const';

const route = useRoute();
const router = useRouter();
const api = useApiGetAll();

const selected = ref(['id']);

const routerData = computed(() => {
    return db_router.find((e) => e[1] == route.params.coll)
})

function onRowClickHandle(coll: string, id: string) {
    router.replace(`/update/${coll}/${id}`)
}

api.fetch_data(String(route.params.coll))
</script>

<template>
    <h1 v-if="!routerData" >
        Loading
    </h1>
    <v-container fluid v-else>
        <v-row>
            <v-col
                v-for="(col, i) in Object.keys(routerData[2])"
                :key="i"
            >
                <v-checkbox
                    :label="capitalize(col)"
                    v-model="selected"
                    :value="col"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-table class="w-75 mx-auto mt-10">
                <thead>
                    <tr>
                        <th
                            v-for="(col, i) in selected"
                            :key="i"
                        >
                            {{ capitalize(col) }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(el, i) in api.data"
                        :key=i
                        v-on:click="() => onRowClickHandle(routerData ? routerData[0] : '', el.id)"
                        class="cursor-pointer"
                    >
                        <td
                            v-for="(col, i) in selected"
                            :key="i"
                        >
                            {{ 
                                //@ts-expect-error
                                el[col] 
                            }}
                        </td>
                    </tr>
                </tbody>
            </v-table>             
        </v-row>
    </v-container>
</template>