import { createStore, Module, Store } from 'vuex'

/**
 * plugins mount
 */
// import plugins from '@/store/plugins'
import plugins from './plugins'


import { StateType } from '@/@types'

/**
 * modules mount
 */
import DemoTest from 'modules/DemoTest/store'

const store: Store<StateType> = createStore({
  modules: {
    DemoTest,
  },
  plugins
})

export default store
