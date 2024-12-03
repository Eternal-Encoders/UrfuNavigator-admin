import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import CollectionsPage from './pages/CollectionsPage.vue'
import UpdatePage from './pages/UpdatePage.vue'
import CreatePage from './pages/CreatePage.vue'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { md3 } from 'vuetify/blueprints'

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  theme: {
    defaultTheme: 'dark'
  }
})
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/collections/:coll', component: CollectionsPage },
    { path: '/update/:coll/:id', component: UpdatePage },
    { path: '/create/:coll', component: CreatePage }
  ]
})
const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
