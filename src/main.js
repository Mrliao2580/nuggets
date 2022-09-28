/*
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-28 17:27:05
 * @Description: main
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './js/router'
import store from './store'
/**
 * 引入i18n国际化
 */
import i18n from './i18n/';

// 導入 Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n, //啟用 i18n 必須註冊
  render: h => h(App)
}).$mount('#app')
