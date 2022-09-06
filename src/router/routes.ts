/* global
*/
import { Comment, defineAsyncComponent } from 'vue'
const Layout = () => import('comps/Layout/index.vue')
import { RouteRecordRaw } from 'vue-router'

/**
 * 为渲染菜单添加的测试路由
 * 若含有 children 路由，则需要将 redirect 设置为 children[0] 的 path 路径
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/test',
    props: {
      icon: 'xxxxx'
    },
    children: [
      {
        path: 'test',
        component: () => import('@/modules/ModalWrapper/pages/test.vue'),
        props: {
          icon: '2133'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: defineAsyncComponent(() => import('comps/404.vue'))
  }
]

export default routes
