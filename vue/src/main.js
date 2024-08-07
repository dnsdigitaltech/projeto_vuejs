import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Globally Filter Created
Vue.filter('snippet', val=>{
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,70)
  return val
})
new Vue({
  render: h => h(App),
}).$mount('#app')
