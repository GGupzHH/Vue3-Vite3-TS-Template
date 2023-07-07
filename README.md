[![Author](https://img.shields.io/badge/Author-GGupzHH-d9f)](https://github.com/GGupzHH)

# 1. Vue3 + Typescript + Vite4
```
  基于Vue3、TypeScript、Vite4 实现的模板
```


### 1.0.1. 前置
  - 安装依赖
    ```
    pnpm 
    ``` 

### 1.0.2. 运行
  - 启动
    ```
      pnpm serve
    ```

### 1.0.3. 目录结构
  ```txt
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── @types      // 全局自定义模块类型
    │   ├── assets      // 静态文件
    │   ├── components  // 全局公共组件
    │   ├── hooks       // 钩子函数
    │   ├── modules     // 业务模块
    │   ├── plugins     // 全局插件
    │   ├── router      // 路由
    │   ├── store       // 状态管理
    │   ├── styles      // 全局样式+组件库样式
    │   ├── utils       // 工具函数
    │   ├── widgets     // 强业务相关全局组件
    │   ├── App.vue
    │   ├── env.d.ts
    │   ├── main.ts
    │   └── shims-vue.d.ts
    ├── tsconfig.json
    ├── uno.config.ts   // unocss 配置文件
    ├── Dockerfile      // Docker 配置文件
    ├── LICENSE
    ├── README.md
    ├── auto-imports.d.ts
    ├── index.html
    ├── jsconfig.json
    ├── package.json
    ├── pnpm-lock.yaml
    └── vite.config.ts   // vite 配置文件
  ```

#### 1.0.3.1 components
  ```txt
    // 以文件夹形式存放，index.vue导出根组件
    ├── Empty
    │   ├── ImgPage.vue
    │   └── TableEmpty.vue
    ├── IconFont
    │   └── index.vue
    ├── Layout
    │   └── index.vue
    ├── Pagination
    │   └── index.vue
    ├── 404.vue
    └── index.ts        // 挂载公共组件
  ```

#### 1.0.3.2 hooks
  ```txt
    └── useRefElForm.ts  // hook函数
  ```

#### 1.0.3.3 modules
  ```txt
    // 以模块划分，每个模块独立的入口页面和状态管理、模块布局、功能组件、接口、固定数据
    ├── DemoTest
    │   ├── api
    │   ├── components
    │   ├── pages
    │   └── store
    ├── DemoTest2
    │   ├── api
    │   ├── components
    │   ├── pages
    │   └── store
    └── ModalWrapper
        ├── components
        ├── data
        └── pages
  ```

#### 1.0.3.4 plugins
  ```txt
    ├── ModalDialog     // vue插件开发
    │   ├── index.ts    // 插件各个生命周期逻辑
    │   └── modal.vue   // 插件样式和功能
    ├── index.ts        // 插件注册
    └── types.ts        // 插件数据类型定义
  ```

#### 1.0.3.5 router
  ```txt
    ├── index.ts        // 实例化vue-router
    ├── permission.ts   // 路由守卫
    └── routes.ts       // 业务路由
  ```

#### 1.0.3.6 store
  ```txt
    ├── index.ts          // 实例化Pinia并挂载Pinia插件
    └── plugins
        ├── index.ts      // 注册插件
        └── mounted
            └── mixin.ts
  ```

#### 1.0.3.7 styles
  ```txt
    ├── common.scss             // 实例化vue-router
    ├── element-status.scss     // 覆盖组件库样式
    ├── element-variables.scss  // 组件库主题样式定义
    ├── global-class.scss       // 全局样式
    ├── index.scss              // 初始化浏览器样式并统一导出
    ├── mixin.scss              // mixin
    └── theme.scss              // 
  ```


#### 1.0.3.8 utils
  ```txt
    ├── camelCase.ts             // 接口字段转驼峰
    └── request.ts               // axios封装
  ```

#### 1.0.3.9 widgets
  ```txt
    ├── demo                     // 业务组件目录
    │   ├── index.vue            // 业务组件
    │   └── test.vue             // 业务组件用法
    └── test.vue                 // 对应路由/test 可以直接在这里测试
  ```
