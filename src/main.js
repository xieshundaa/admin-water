import Vue from 'vue'
import 'normalize.css'
import 'babel-polyfill'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-green/index.css'
// import 'element-ui/lib/theme-gray/index.css'
import App from './App'
import router from './router'
import moment from 'moment'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(moment)

Vue.prototype.$moment = moment

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  // components:{Map},
  render: h => h(App)
}).$mount('#app')

