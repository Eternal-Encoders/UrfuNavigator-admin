<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { IInstitute } from '../utils/interfaces';

const route = useRoute();
</script>

<template>
    {{ route.params.coll }}
</template>