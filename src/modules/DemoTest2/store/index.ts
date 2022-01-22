import { defineStore } from 'pinia'

const defineStoreOptions = {
  state: () => {
    return {
      names: 123
    }
  },
  actions: {
    aaa() {

    }
  }
}

type stateFnType = typeof defineStoreOptions.state

export type DemoTest2Type = typeof defineStoreOptions.actions & ReturnType<stateFnType>

export const useDemoTest2 = defineStore('DemoTest2', defineStoreOptions)
