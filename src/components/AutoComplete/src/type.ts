/**
 * @description: github用户信息接口
 * @author: MrRabbit
 * @date: 2021-12-23 0:14
 */
//
export interface IGitHubUser {
  login: string //名称
  id: number
  avatar_url: string //头像
}

export interface IHttpRequestUser {
  incomplete_results: boolean
  items: Array<IGitHubUser>
  total_count: number
}
