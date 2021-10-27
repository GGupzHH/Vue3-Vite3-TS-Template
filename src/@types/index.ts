import { DemoTestType } from "@/modules/DemoTest/store";
import { DemoTest2Type } from "@/modules/DemoTest2/store";

export interface comps {
  install: (app: import("vue").App<any>) => void
}

export interface IRequestData {
  error: number
  data: any
  msg: string
}

// vuex state 的模块的类型 
// 使用 typeof  获取模块的里面的属性生成类型 
type ModuleType = {
  DemoTest: DemoTestType
  DemoTest2: DemoTest2Type
}

// 所有的StateType
export type StateType = ModuleType

declare module 'axios' {
  export interface AxiosRequestConfig {
    redirect?: string
  }
}