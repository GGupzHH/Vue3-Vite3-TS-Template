/* global IModulesApiSuite */
import request from '@/utils/request'

const DemoTest2Api: IModulesApiSuite = {
  getDemoTestList() {
    return request.get('/api/demo_test/list', {
      redirect: '404'
    })
  },
  getDemoTestListID(id: string, params: any) {
    return request.get(`/api/${ id }/list`, params)
  }
}

export default DemoTest2Api
