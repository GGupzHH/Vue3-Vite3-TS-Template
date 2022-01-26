import { defineStore } from 'pinia'

export const useDemoTest2 = defineStore('DemoTest2', {
  state: () => {
    return {
      names: 123
    }
  },
  actions: {
    vddd() {
      console.log(this.names)
    },
    aaa() {
      console.log(this.vddd())
      console.log(this.names)
    }
  }
})

