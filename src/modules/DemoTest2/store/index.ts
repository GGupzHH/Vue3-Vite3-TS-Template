import { defineStore } from 'pinia'

const defineStoreOptions = defineStore('InvestmentProject', {
  state: () => {
    return {

    }
  },
  actions: {

  }
})

type stateFnType = typeof defineStoreOptions.state

export type SystemSettingsType = typeof defineStoreOptions.actions & ReturnType<stateFnType>

export const useInvestmentProject = defineStore('SystemSettings', defineStoreOptions)
