import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'

const app = createApp(App)

app
  .use(ElementPlus)
  // .use(router)
  
app
  .mount('#app')
  