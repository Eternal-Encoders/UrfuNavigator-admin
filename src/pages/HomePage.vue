<script setup lang="ts">
import Link from '../components/Link.vue';
import { capitalize } from 'vue';
import { db_router } from '../utils/const';
import { useRouter } from 'vue-router';

const router = useRouter();

function onPlusClickHandle(e: Event, coll: string) {
    e.preventDefault();
    e.stopPropagation();

    router.replace(`/create/${coll}`);
}
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col
                v-for="(collection, i) in db_router"
                :key=i
                cols="12"
                md="4"
            >
                <v-card 
                    variant="tonal"
                >
                    <Link :to="`collections/${collection[1]}`">
                        <v-card-title>
                            {{ capitalize(collection[1]) }}
                        </v-card-title>
                        <v-card-actions>
                            <div
                                v-on:click="(e: Event) => onPlusClickHandle(e, collection[0])"
                                class="cursor-pointer"
                            >
                                +  
                            </div>
                        </v-card-actions>
                    </Link>
                </v-card>
            </v-col>
        </v-row>        
    </v-container>
</template>