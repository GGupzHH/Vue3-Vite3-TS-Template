import { defineStore } from 'pinia'
import DemoTest2Api from 'modules/DemoTest2/api'

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
    },
    async getDemoTestList() {
      const res = await DemoTest2Api.getDemoTestList({})
      return this.filterResponse(res)
    }
  }
})

