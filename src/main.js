import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './Store'
import router from './Routes'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

new Vue({
  VueApexCharts,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
