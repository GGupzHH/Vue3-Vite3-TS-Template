import { StateType } from '@/@types'
// import { getDemoTestList } from 'modules/DemoTest/api'
import MUTATION from 'modules/DemoTest2/store/mutations-type'
import { filterResponse } from '@/store/utils/mixin'
import { Module } from 'vuex'

const state = {
  demoList2: [
    1,
    2,
    3,
    4
  ]
}

export type DemoTest2Type = typeof state


const DemoTest2: Module<DemoTest2Type, StateType> = {
  namespaced: true,
  state,
  getters: {
    demoList: (state: any):void => state.demoList
  },
  actions: {
    aaa(store) {
      console.log(store.state)
    },
    async GetModuleTestList ({ commit }, params) {
      // TODO: 模拟响应时间
      // await sleep(1000)
      // TODO: 模拟 api
      // const result = await getDemoTestList(params)
      // const result = {
      //   test: 'ok'
      // }
      // console.log(result)
      // commit(MUTATION.SET_DEMO_LIST, result)
      // return result
    }
  },
  mutations: {
    [MUTATION.SET_DEMO_LIST] (state, demoList) {
      // state.demoList = demoList
    },
    [MUTATION.SET_DEMO_LIST]() {
      
    }
  },
  ...filterResponse
}

export default DemoTest2
