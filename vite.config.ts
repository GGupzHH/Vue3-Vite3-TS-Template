import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'
import svgLoader from 'vite-svg-loader'
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>UPro</title>'
      )
    }
  }
}
export default defineConfig(({ mode }) => ({
  plugins: [
    vue() as Plugin,
    UnoCSS(),
    svgLoader(),
    htmlPlugin(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue\??/],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          vue: ['createVNode', 'render'],
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute'
          ]
          // 全局使用 _.xxxx()
          // 'lodash-es': [
          //   // default imports
          //   ['*', '_'] // import { * as _ } from 'lodash-es',
          // ]
        },
        // type import
        {
          from: 'vue',
          imports: [
            'App',
            'ComponentPublicInstance',
            'ComponentPublicInstanceCostom',
            'DefineComponent'
          ],
          type: true
        },
        {
          from: 'vue-router',
          imports: [
            'RouteRecordRaw',
            'RouteLocationRaw',
            'LocationQuery',
            'NavigationFailure',
            'RouteParams',
            'RouteLocationNormalizedLoaded',
            'RouteRecordName',
            'NavigationGuard'
          ],
          type: true
        }
      ],
      resolvers: mode === 'development' ? [] : [ElementPlusResolver()],
      dirs: ['./src/hooks'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    terser(
      {
        compress: {
          drop_console: true
        }
      }
    ) as Plugin
  ],
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://172.25.100.96/swgeneralplatform/api',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, 'src/store')
      },
      {
        find: 'comps',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, 'src/modules')
      },
      {
        find: 'router',
        replacement: path.resolve(__dirname, 'src/router')
      },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, 'src/widgets')
      },
      {
        find: 'plugins',
        replacement: path.resolve(__dirname, 'src/plugins')
      },
      {
        find: 'mixins',
        replacement: path.resolve(__dirname, 'src/mixins')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: "@import './src/styles/element-variables.scss';"
        additionalData: "@use '@/styles/element-variables.scss';"
      }
    }
  }
}))
