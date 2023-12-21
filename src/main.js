import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

// 使用 bootstrap
import 'bootstrap'
import './assets/all.scss'

const app = createApp(App)

app.mount('#app')
