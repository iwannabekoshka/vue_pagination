import Vue from 'vue'
import App from './App.vue'
import SlidingPagination from 'vue-sliding-pagination'

Vue.config.productionTip = false

new Vue({
  SlidingPagination,
  render: h => h(App),
}).$mount('#app')
