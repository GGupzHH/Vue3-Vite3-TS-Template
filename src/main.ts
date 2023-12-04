import App from './App.vue'

import router from '@/router'
import 'router/permission'

import pinia from '@/store'

import '@/assets/fonts'

import ElementPlus from 'element-plus'
import GlobalComponents from '@/components'
import GlobalDirectives from '@/directives'
import Plugins from '@/plugins'
import 'virtual:uno.css'

const app = createApp(App)

app
  .use(router)
  .use(pinia)

app
  .use(ElementPlus)
  .use(GlobalComponents)
  .use(GlobalDirectives)
  .use(Plugins)
  .mount('#app')
