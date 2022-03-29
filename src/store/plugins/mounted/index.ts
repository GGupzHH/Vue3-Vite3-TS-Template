
/**
 * plugin single mounted
 */

// import { filterResponse } from '@/store/utils/mixin'
// import router from '@/router'
import { filterResponse } from '@/store/utils/mixin'
import { PiniaPluginContext } from 'pinia'

const piniaPlugins = (context: PiniaPluginContext): void => {
  context.store.filterResponse = filterResponse
}

export default piniaPlugins
