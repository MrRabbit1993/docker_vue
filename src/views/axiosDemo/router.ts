export default {
  name: 'axios',
  title: '请求',
  path: '/axios',
  component: () => import(/* webpackChunkName: "axios" */ './index')
}
