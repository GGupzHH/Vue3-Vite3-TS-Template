import { filterResponseTypes } from '@/store/utils/mixin'

import { RouteRecordRaw } from 'vue-router'

export interface IRequestData {
  error: number
  data: any
  msg: string
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    redirect?: string
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    filterResponse?: filterResponseTypes
  }
}

export type CustomizeRouter = {
  icon?: string
  children?: Array<RouteRecordRaw & CustomizeRouter>
}
