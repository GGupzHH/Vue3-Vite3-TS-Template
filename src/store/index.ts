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

// Store 是 vuex 提供的写好的泛型 所以这里需要一个state的类型传入
const store: Store<StateType> = createStore({
  modules: {
    DemoTest,
  },
  plugins
})

export default store
