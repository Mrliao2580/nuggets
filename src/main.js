/*
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-29 17:54:48
 * @Description: main
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './js/router'
import store from './store'
// 導入 複製到粘貼板
import VueClipBoard from 'vue-clipboard2'

Vue.use(VueClipBoard)
// 導入 iconfont
import './assets/iconfont/iconfont.css'
/**
 * 引入i18n国际化
 */
import i18n from './i18n/';

// 導入 Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 導入 element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n, //啟用 i18n 必須註冊
  render: h => h(App)
}).$mount('#app')
