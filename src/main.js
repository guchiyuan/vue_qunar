// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'styles/reset.css'
//解决1pxborder的问题
import 'styles/border.css'
//解决点击延迟300ms问题
import fastClick from 'fastclick'

//引入iconfont样式
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
