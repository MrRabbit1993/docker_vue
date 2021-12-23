import request from '@/request'
import { IBaseInfo } from '@/components/BaseInfo'
import { IHttpRequestUser } from '@/components/AutoComplete/src/type'
const prefix = '/search'
const prefixUser = '/users'
/**
 * @description: 获取匹配的列表
 * @author: MrRabbit
 * @param { String } q 关键字
 * @return { Promise<IHttpRequestUser> }
 * @date: 2021-12-23 16:14
 */

export const getRequestList = (params) => {
  return request.get<IHttpRequestUser>(`${prefix}/users`, params)
}

/**
 * @description: 获取详细信息
 * @author: MrRabbit
 * @param { String } name 用户字段
 * @return { Promise<IBaseInfo> }
 * @date: 2021-12-23 16:14
 */

export const getRequestInfo = (name: string) => {
  return request.get<IBaseInfo>(`${prefixUser}/${name}`)
}
