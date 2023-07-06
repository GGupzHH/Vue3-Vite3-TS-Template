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
    │   ├── styles      // 全局样式+组件库样式
    │   ├── store       // 状态管理
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
