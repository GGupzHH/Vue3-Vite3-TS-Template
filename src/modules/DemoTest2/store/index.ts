import { defineStore } from 'pinia'

// type defineStoreOptionsType = {
//   state: () => any
//   actions: {
//     [key in string]: (this: any) => any
//   }
// }
const state = () => {
  return {
    names: 123
  }
}

type stateFnType = typeof state

// export type DemoTest2Type = typeof defineStoreOptions.actions & ReturnType<stateFnType>

const defineStoreOptions: {
  state: stateFnType
  actions: ThisType<ReturnType<stateFnType>>
} = {
  state,
  actions: {
    vddd() {
      console.log(this.names)
    },
    aaa() {
      console.log(this.vddd())
      console.log(this.names)
    }
  }
}

export const useDemoTest2 = defineStore('DemoTest2', defineStoreOptions)
