import { DemoTestType } from "@/modules/DemoTest/store";
import { DemoTest2Type } from "@/modules/DemoTest2/store";

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
  DemoTest2: DemoTest2Type
}

// 所有的StateType
export type StateType = ModuleType
