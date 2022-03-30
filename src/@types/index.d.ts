import { filterResponseTypes } from '@/store/utils/mixin'
import { AxiosRequestConfig } from 'axios'

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
    filterResponse: filterResponseTypes
  }
}

export type CustomizeRouter = {
  icon?: string
}

type a<T = any> = { [key in any]: T }

export interface IRequestSuite {
  get(uri: string, params?: a, config?: AxiosRequestConfig): Promise<IRequestData>
  post(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
  put(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
  patch(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
  delete(uri: string, config?: AxiosRequestConfig): Promise<IRequestData>
}

export type IModulesApiSuite = a<(...args: any) => Promise<IRequestData>>

