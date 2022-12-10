import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import 'router/permission'

import pinia from '@/store'

import '@/assets/fonts'

import ElementPlus from 'element-plus'
import GlobalComponents from '@/components'
import Plugins from '@/plugins'

const app = createApp(App)

app
  .use(router)
  .use(pinia)

app
  .use(ElementPlus)
  .use(GlobalComponents)
  .use(Plugins)
  .mount('#app')
