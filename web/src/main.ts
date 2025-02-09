import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import icons from './includes/icons'
import router from './includes/router'

const app = createApp(App)

app.component('fa-icon', icons)

app.use(createPinia())
app.use(router)

app.mount('#app')
