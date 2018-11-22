import Vue from 'vue'
import './plugins/vuetify'
import router from './router.js'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({

  render: h => h(App),
  router,
}).$mount('#app')