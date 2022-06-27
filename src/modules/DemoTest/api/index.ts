/* global IModulesApiSuite */
import request from '@/utils/request'

const DemoTest1Api: IModulesApiSuite = {
  getDemoTestList(params: any) {
    return request.get('/api/demo_test/list', params, {
      redirect: '404'
    })
  },
  getDemoTestListID(id: string, params: any) {
    return request.get(`/api/${ id }/list`, params)
  }
}

export default DemoTest1Api
