import Vue from 'vue'
import Landing from './Landing.vue'
import lineClamp from 'vue-line-clamp'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(lineClamp)

new Vue({
  render: (h) => h(Landing),
}).$mount('#app')
