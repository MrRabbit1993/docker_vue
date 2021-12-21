import Vue from 'vue'
import App from './App'
import './registerComponents'
import '@/styles/index.scss'
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
