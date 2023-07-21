import { createPinia, PiniaPluginContext } from 'pinia'
import { filterResponse } from '@/store/plugins/mixin'

const pinia = createPinia()


// pinia.use((context: PiniaPluginContext): void => {
//   context.store.filterResponse = filterResponse
// })

export default pinia
