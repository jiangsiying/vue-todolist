import Vue from 'vue'   //在页面中引入vue.js
import App from './App.vue'  //引入自定义组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
