import { filterResponseTypes } from '@/store/utils/mixin'
import { AxiosRequestConfig } from 'axios'
import { RouteRecordRaw } from 'vue-router'
import { ComponentPublicInstance } from 'vue'

export interface IRequestData {
  error: number
  data: any
  msg: string
}
// $ModalDialog
declare module 'vue' {
  export type ComponentPublicInstanceCostom = ComponentPublicInstance<{ $ModalDialog: any; }>
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

declare module 'vue-router' {
  // export interface RouteRecordRaw {
  //   icon?: 'string'
  // }
}

export type CustomizeRouter = {
  icon?: string
  children?: Array<RouteRecordRaw | CustomizeRouter>
}

type ObjectValueSuite<T = any> = { [key in any]: T }

export interface IRequestSuite {
  get(uri: string, params?: ObjectValueSuite, config?: AxiosRequestConfig): Promise<IRequestData>
  post(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
  put(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
  patch(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
  delete(uri: string, config?: AxiosRequestConfig): Promise<IRequestData>
}

export type IModulesApiSuite = ObjectValueSuite<(...args: any) => Promise<IRequestData>>

