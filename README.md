<!--
 * @Author: lzh
 * @Date: 2022-09-21 18:24:50
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-28 18:33:39
 * @Description: 描述文档
-->

# nuggets

### 记录掘金知识点

- vue2
- 国际化 i18n
- 组件 Vant

更改 favicon.ico 图标 需要在 vue.config.js 加上以下代码

```
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
```

> **下载**

```
  git clone https://github.com/Mrliao2580/nuggets.git
    =>
      npm i
    =>
      npm run dev
```
