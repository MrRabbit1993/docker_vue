import request from '@/request'
import { IHttpRequestUser } from './type'
const prefix = '/search'
/**
 * @description: 获取匹配的列表
 * @author: MrRabbit
 * @param { String } q 关键字
 * @return { Promise<IHttpRequestUser> }
 * @date: 2021-12-23 16:14
 */

//api.github.com/users/mrrabbit1993
//api.github.com/search/users?q=mrrabbit1993
export const getRequestList = (params) => {
  return request.get<IHttpRequestUser>(`${prefix}/users`, params)
}
