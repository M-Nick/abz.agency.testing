import Vue from 'vue'
import Landing from './Landing.vue'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(Landing),
}).$mount('#app')
