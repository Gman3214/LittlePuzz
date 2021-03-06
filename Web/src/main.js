import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import "./Firebase"
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
