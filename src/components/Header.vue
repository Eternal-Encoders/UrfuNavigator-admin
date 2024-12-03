<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const items = computed(() => ([
    {
        title: 'root',
        to: '/'
    },
    ...route.path
        .split('/')
        .filter((e) => e != '' && e != 'collections')
        .map((e) => ({
            title: e,
            to: `/${e}`
        }))
]))
</script>

<template>
    <v-breadcrumbs :items=items>
    </v-breadcrumbs>
</template>