import { IRequestData } from '@/@types'
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function getDemoTestList (params: any): Promise<IRequestData> {
  return request({
    url: '/api/demo_test/list',
    method: 'get',
    params,
    redirect: '404'
  })
}

// export function createDemoTest (data) {
//   return request({
//     url: '/api/demo_test',
//     method: 'post',
//     data
//   })
// }

// export function updateDemoTest (data) {
//   return request({
//     url: `/api/demo_test/${data.demoId}`,
//     method: 'put',
//     data
//   })
// }

// export function deleteDemoTest (demoId) {
//   return request({
//     url: `/api/demo_test/${demoId}`,
//     method: 'delete'
//   })
// }
