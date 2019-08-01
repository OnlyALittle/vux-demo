import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer, {
  defaultOptions: {
      zIndex: 9999
  }
})

Vue.config.productionTip = false

new Vue({
  router,  // 注入到根实例中
  render: h => h(App),
}).$mount('#app')
