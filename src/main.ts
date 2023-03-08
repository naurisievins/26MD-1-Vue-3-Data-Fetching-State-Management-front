import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import './assets/main.css'

const app = Vue.createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(Vue3Toastify, {
  autoClose: 1500
} as ToastContainerOptions)

app.mount('#app')
