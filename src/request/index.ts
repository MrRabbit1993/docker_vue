import axios, { AxiosRequestConfig, AxiosPromise, Method } from 'axios'
import merge from 'webpack-merge'
const service = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000 // 请求超时时间
})
// 请求拦截器
service.interceptors.request.use((config) => config)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { status, data } = response
    if (status === 200) {
      return data
    } else {
      return Promise.reject('网络异常')
    }
  },
  () => {
    return Promise.reject('网络异常')
  }
)
function ajax<T>(method: Method, url: string, params?: ObjRecord, options?: AxiosRequestConfig): AxiosPromise<T> {
  let config: AxiosRequestConfig = { url: url, method: method || 'get' }
  switch (method) {
    case 'get':
    case 'delete':
      config.params = { ...(params || {}), _t: new Date().getTime() }
      break
    case 'post':
    case 'put':
      config.data = params
      break
  }
  if (options) {
    config = merge(config, options)
  }
  return service(config)
}
// 请求封装
export default {
  service<T = ObjRecord>(options: AxiosRequestConfig): AxiosPromise<T> | T {
    //用于自定义其他扩展，或调用方法
    return service(options)
  },
  get<T = ObjRecord>(url: string, params?: ObjRecord, options?: AxiosRequestConfig): AxiosPromise<T> | T {
    return ajax<T>('get', url, params, options)
  },
  post<T = ObjRecord>(url: string, params?: ObjRecord, options?: AxiosRequestConfig): AxiosPromise<T> | T {
    return ajax<T>('post', url, params, options)
  }
}
