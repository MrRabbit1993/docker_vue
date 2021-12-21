import Vue from 'vue'
import Router from 'vue-router'
import { RouteCustom } from '@/types/router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const requireAll = (requireContext) => requireContext.keys().map((key: string) => requireContext(key).default)
const req = require.context('@/views', true, /router\.ts$/)
export const constantRouterMap: RouteCustom[] = requireAll(req)

const router: Router = new Router({
  routes: constantRouterMap
})

export default router
