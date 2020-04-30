import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'dbs123',
    entry: '//crm-web-test.viomi.com.cn/index.html',
    container: '#systemContainer',
    activeRule: '/dbs'
  }
])
// loadMicroApp(
//   {
//     name: 'app',
//     entry: '//localhost:8010',
//     container: '#systemContainer',
//   }
// );
start()
