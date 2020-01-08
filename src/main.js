import Vue from 'vue'
import Landing from './Landing.vue'
import lineClamp from 'vue-line-clamp'
import Vue2TouchEvents from 'vue2-touch-events'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(lineClamp)
Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  touchHoldTolerance: 400,
  swipeTolerance: 15,
  longTapTimeInterval: 400,
})

new Vue({
  render: (h) => h(Landing),
}).$mount('#app')
