import { DemoTestType } from "@/modules/DemoTest/store";

declare const comps: {
  install: (app: import("vue").App<any>) => void;
};

declare interface IRequestData {
  error: number
  data: any
  msg: string
}

// vuex state 的模块的类型
type ModuleType = {
  DemoTest: DemoTestType
}

// 所有的StateType
export type StateType = ModuleType
