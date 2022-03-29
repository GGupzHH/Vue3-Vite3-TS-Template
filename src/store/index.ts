import { createPinia } from 'pinia'
import piniaPlugins from '@/store/plugins/mounted'

const pinia = createPinia()

// import mounted from './mounted'

pinia.use(piniaPlugins)

export default pinia
