export default {
  name: 'axios',
  path: '/axios',
  component: () => import(/* webpackChunkName: "axios" */ './index')
}
