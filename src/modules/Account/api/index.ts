
import request from '@/utils/request'
const accountApi = {
  getDemoTestListID(id: string) {
    return request.get(`/api/${ id }/list`)
  }
}

export default accountApi
