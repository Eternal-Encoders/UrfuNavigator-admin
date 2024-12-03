<script setup lang="ts">
import { useRouter } from 'vue-router';

const {to} = defineProps<{
    to: string
}>()

const router = useRouter()

function onClickHandle() {
    router.replace(`/${to}`);
}
</script>

<template>
    <div v-on:click="onClickHandle" class="cursor-pointer">
        <slot />
    </div>
</template>