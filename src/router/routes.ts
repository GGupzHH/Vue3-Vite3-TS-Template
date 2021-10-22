import { Comment, defineAsyncComponent } from 'vue'
const Layout = () => import('comps/Layout/index.vue')

/**
 * 为渲染菜单添加的测试路由
 * 若含有 children 路由，则需要将 redirect 设置为 children[0] 的 path 路径
 */

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/test',
    children: [
      {
        path: 'test',
        component: () => import('@/modules/DemoTest/pages/list.vue')
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
