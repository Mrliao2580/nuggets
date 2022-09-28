<!--
 * @Author: lzh
 * @Date: 2022-09-15 11:32:19
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-28 16:51:54
 * @Description: 切換語言
-->
<template>
  <div id="test-ka">
    <h3>国际化翻译</h3>
    <p v-text="$t('name')"></p>
    <p>{{ $t('info.age') }}</p>
    <p>
      <el-button @click.native="changeType('zh')">切换中文</el-button>
      <el-button @click.native="changeType('en')">切换英文</el-button>
    </p>
  </div>
</template>

<script>
export default {
  date() {
    return {};
  },
  methods: {
    changeType(type) {
      console.log(123, type);
      // 此处做了语言选择记录
      localStorage.setItem('locale', type);
      // 修改显示语言
      this.$i18n.locale = type;
    },
  },
};
</script>

<style lang="less" scoped></style>
