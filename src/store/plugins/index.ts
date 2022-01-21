/**
 * plugins all export
 */

import pinia from '@/store'

import piniaPlugins from '@/store/plugins/mounted'
// import mounted from './mounted'

pinia.use(piniaPlugins)
