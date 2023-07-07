import { filterResponse } from '@/store/plugins/mounted/mixin'
import { PiniaPluginContext } from 'pinia'

const piniaPlugins = (context: PiniaPluginContext): void => {
  context.store.filterResponse = filterResponse
}

export default piniaPlugins
