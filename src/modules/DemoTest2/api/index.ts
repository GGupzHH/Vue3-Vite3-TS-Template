import { IModulesApiSuite, IRequestData } from '@/@types'
import request from '@/utils/request'

const DemoTest2Api = {
  getDemoTestList(params: any) {
    return request.get('/api/demo_test/list', params, {
      redirect: '404'
    })
  },
  getDemoTestListID(id: string, params: any) {
    return request.get(`/api/${ id }/list`, params)
  }
}

export default DemoTest2Api
