/**
 * @description: github用户信息
 * @author: MrRabbit
 * @date: 2021-12-23 10:14
 */
export interface IGitHubUser {
  login: string //名称
  id: number
  avatar_url: string //头像
}

/**
 * @description: github用户详细信息
 * @author: MrRabbit
 * @date: 2021-12-23 10:15
 */
export interface IHttpRequestUser {
  incomplete_results: boolean
  items: Array<IGitHubUser>
  total_count: number
}

/**
 * @description: KeyValue
 * @author: MrRabbit
 * @date: 2021-12-23 10:24
 */
export type KeyValueProps = {
  key: string
  value: string
}
