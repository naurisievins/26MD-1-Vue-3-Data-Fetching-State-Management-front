import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.css'

const app = Vue.createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
