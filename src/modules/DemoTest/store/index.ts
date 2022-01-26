import { defineStore } from 'pinia'

export const useDemoTest = defineStore('DemoTest', {
  state: () => {
    return {
      names: 13
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

