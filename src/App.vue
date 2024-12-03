<script setup lang="ts">
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
import { ref } from "vue";

const isDev = ref(true ? "Тестовый": "Продкашен");
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <v-card
            :title=isDev.toUpperCase()
            variant="tonal"
            class="text-center"
          />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <v-app-bar>
        <Header />
      </v-app-bar>
      <RouterView />
    </v-main>
  </v-layout>
</template>
