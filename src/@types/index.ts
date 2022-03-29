import { filterResponseTypes } from '@/store/utils/mixin'

export interface IRequestData {
  error?: number
  data: any
  msg?: string
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    redirect?: string
  }

  export interface AxiosResponse<T extends IRequestData> {
    data: T
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    filterResponse: filterResponseTypes
  }
}

export type CustomizeRouter = {
  icon?: string
}
