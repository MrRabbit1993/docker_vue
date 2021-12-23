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
  //   avatar_url: "https://avatars.githubusercontent.com/u/28438?v=4"
  // events_url: "https://api.github.com/users/aa/events{/privacy}"
  // followers_url: "https://api.github.com/users/aa/followers"
  // following_url: "https://api.github.com/users/aa/following{/other_user}"
  // gists_url: "https://api.github.com/users/aa/gists{/gist_id}"
  // gravatar_id: ""
  // html_url: "https://github.com/aa"
  // id: 28438
  // login: "aa"
  // node_id: "MDQ6VXNlcjI4NDM4"
  // organizations_url: "https://api.github.com/users/aa/orgs"
  // received_events_url: "https://api.github.com/users/aa/received_events"
  // repos_url: "https://api.github.com/users/aa/repos"
  // score: 1
  // site_admin: false
  // starred_url: "https://api.github.com/users/aa/starred{/owner}{/repo}"
  // subscriptions_url: "https://api.github.com/users/aa/subscriptions"
  // type: "User"
  // url: "https://api.github.com/users/aa"
}

export interface IHttpRequestUser {
  incomplete_results: boolean
  items: Array<IGitHubUser>
  total_count: number
}
