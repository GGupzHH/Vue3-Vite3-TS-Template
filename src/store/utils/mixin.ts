import { IRequestData } from '@/types/utils/request'
import { ElMessage } from 'element-plus'

export function filterResponse(
  res: IRequestData,
  successCb: Function | undefined,
  errorCb: Function | undefined
) :Promise<IRequestData>{
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      successCb && successCb(res)
    } else {
      errorCb
        ? errorCb(res)
        : ElMessage({
          type: 'error',
          message: res.msg,
          showClose: true
        })
    }
    resolve(res)
  })
}
