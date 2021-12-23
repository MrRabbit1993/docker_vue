import request from '@/request'
import { IBaseInfo } from '@/components/BaseInfo'
const prefix = '/users'
/**
 * @description: 获取详细信息
 * @author: MrRabbit
 * @param { String } userName 用户字段
 * @return { Promise<IBaseInfo> }
 * @date: 2021-12-23 16:14
 */

export const getRequestInfo = (userName) => {
  return request.get<IBaseInfo>(`${prefix}/${userName}`)
}
