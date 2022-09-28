/*
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-28 18:21:52
 * @Description: file content
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
})