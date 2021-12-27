import Vue from 'vue'
import App from './view/Home'
import './registerComponents'
import '@/styles/index.scss'
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

/**
 * TypeScript
 */
// const requireAll = (requireContext) => requireContext.keys().map((key: string) => requireContext(key))
// const req = require.context('@/typescript', true, /index\.ts$/)
// requireAll(req)
