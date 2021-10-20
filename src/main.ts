import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'router/permission'

import '@/assets/fonts'

import ElementPlus from 'element-plus'
import GlobalComponents from './components'

const app = createApp(App)

app
  .use(router)
  

app
  .use(ElementPlus)
  .use(GlobalComponents)
  .mount('#app')
  