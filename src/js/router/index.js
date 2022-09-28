/*
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-28 16:44:30
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo1',
    component: () => import("@/views/demo/demo1.vue"),
  },
  {
    path:"/demo1",
    name:"demo1",
    component: () => import("@/views/demo/demo1.vue"),
  }
]

const router = new VueRouter({
  routes,
  mode: "history" // 去除url中的 #
})

export default router
