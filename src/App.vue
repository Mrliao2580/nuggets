<!--
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-28 17:46:16
 * @Description: app
-->
<template>
  <div id="app">
    <div id="changeLang">
      <div @click="changLang('zh')" class="chinese">中文</div>
      <div class="long-string">丨</div>
      <div @click="changLang('en')" class="english">English</div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      Meg: 'Hello Word!',
    };
  },
  methods: {
    changLang(type) {
      // 此处做了语言选择记录
      localStorage.setItem('locale', type);
      // 修改显示语言
      this.$i18n.locale = type;
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#changeLang {
  height: auto;
  position: fixed;
  top: 10px;
  right: 40px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 设置文字不能被选中
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .chinese {
    padding: 2px 6px 2px 8px;
    cursor: pointer;
    &:hover {
      background-color: rgb(217, 216, 216);
    }
  }
  .english {
    cursor: pointer;
    padding: 2px 8px 2px 6px;
    &:hover {
      background-color: rgb(217, 216, 216);
    }
  }
  border: 1px solid #9e9e99;
  border-radius: 4px;
}
</style>
