import { filterResponseTypes } from '@/store/utils/mixin'
import { AxiosRequestConfig } from 'axios'
import { RouteRecordRaw } from 'vue-router'
import { ComponentPublicInstance } from 'vue'
import { Plugins } from '@/plugins/types'

// $ModalDialog
declare module 'vue' {
  /**
   * Costom Instance.
   *
   * Sample： `getCurrentInstance()?.proxy as ComponentPublicInstanceCostom`
   */
  // FIXME 这里可以再细分一下  不一定是Widgets 也可以是别的自定义插件
  export type ComponentPublicInstanceCostom = ComponentPublicInstance<Plugins>

  export interface VNode {
    destroy: any
  }
}

declare module 'axios' {
  /**
   * Costom Axios Field.
   */
  export interface AxiosRequestConfig {
    redirect?: string
  }
}

declare module 'pinia' {
  /**
   * Costom Pinia Field.
   */
  export interface PiniaCustomProperties {
    filterResponse: filterResponseTypes
  }
}

declare module 'vue-router' {
  // export interface RouteRecordRaw {
  //   icon?: 'string'
  // }
}

declare global {
  /**
   * Costom Axios Function Types.
   */
  interface IRequestSuite {
    get(uri: string, params?: ObjectValueSuite, config?: AxiosRequestConfig): Promise<IRequestData>
    post(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
    put(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
    patch(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData>
    delete(uri: string, config?: AxiosRequestConfig): Promise<IRequestData>
  }

  type IModulesApiSuite = ObjectValueSuite<(...args: any) => Promise<IRequestData>>

  /**
   * `error`: Response Status Code.
   *
   * `data`: Response Body.
   *
   * `msg`: Response Message.
   */
  interface IRequestData {
    error: number
    data: any
    msg: string
  }

  /**
   * General Object Types.
   */
  type ObjectValueSuite<T = any> = { [key in any]: T }

  /**
   * Store FilterResponse Callback Type.
   */
  type IStoreFilterCallBack = (res: IRequestData) => Promise<IRequestData>

}

