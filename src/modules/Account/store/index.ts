
import { defineStore } from 'pinia'
import accountApi from '@/modules/Account/api'
export const useAccount = defineStore('Account', {
  state: () => {
    return {
      id: 'absdb'
    }
  },
  actions: {
    async getDemoTestList() {
      const res = await accountApi.getDemoTestListID(this.id)
      return this.filterResponse(res)
    }
  }
})
