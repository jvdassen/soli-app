import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import {
  MdApp,
  MdToolbar,
  MdButton,
  MdDrawer,
  MdIcon,
  MdList,
  MdContent,
  MdField,
  MdCard,
  MdSnackbar,
  MdSubheader
} from 'vue-material/dist/components'

Vue.config.productionTip = false
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdSnackbar)
Vue.use(MdSubheader)
window.Vue = Vue

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
