import { IRequestData } from '@/@types'
import { ElMessage } from 'element-plus'

export function filterResponse(
  res: IRequestData,
  successCb?: (params?: unknown) => unknown | undefined,
  errorCb?: (params?: unknown) => unknown | undefined
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

export type filterResponseTypes = typeof filterResponse