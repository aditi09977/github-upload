import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import BaseDropdown from './components/BaseDropDown.vue'
import TheHeader from './components/TheHeader.vue'

const router = new VueRouter({
  routes,
  mode:'history',
})


Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.component('base-dropdown',BaseDropdown)
Vue.component('the-header', TheHeader);
new Vue({
  components:{
    // 'base-dropdown':BaseDropdown
  },
  router,
  render: h => h(App)
}).$mount("#app");
