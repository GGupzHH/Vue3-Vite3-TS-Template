import { IModulesApiSuite, IRequestData } from '@/@types'
import request from '@/utils/request'

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

const DemoTest2Api = {
  getDemoTestList(params: any) {
    return request.get('/api/demo_test/list', params, {
      redirect: '404'
    })
  },
  getDemoTestListID(id: string, params: any) {
    return request.get(`/api/${id}/list`, params)
  }
}

export default DemoTest2Api
