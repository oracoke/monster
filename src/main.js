import { createApp } from 'vue'
import App from './App'
import naive from 'naive-ui'
import router from '@/router/index'

createApp(App).use(naive).use(router).mount('#app')
