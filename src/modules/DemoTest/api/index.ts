import request from '@/utils/request'
// import request from 'utils/request'

export function getDemoTestList<AxiosPromise>(params: any) {
  return request.get('/api/demo_test/list', params, {
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
