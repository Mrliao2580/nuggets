<!--
 * @Author: lzh
 * @Date: 2022-09-28 16:42:56
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-29 15:54:51
 * @Description: demo1
-->
<template>
  <div class="demo1-box">
    <div class="name-sex-box">
      <van-cell-group>
        <van-field v-model="name" :label="$t('name')" right-icon="warning-o" />
      </van-cell-group>
      <div class="gender-box">
        {{ $t('gender') }}
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">{{ $t('man') }}</van-radio>
          <van-radio name="2" style="margin-left: 20px">{{
            $t('woman')
          }}</van-radio>
        </van-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      sex: '',
      radio: '1',
    };
  },
};
</script>

<style lang="less" scoped>
.demo1-box {
  // width: 80vw;
  .name-sex-box {
    display: flex;
    align-items: center;
    /deep/ .van-cell__title {
      width: 50px;
    }
    /deep/ .van-field__control {
      width: 120px;
    }
    .gender-box {
      display: flex;
      align-items: center;
      margin-left: 10px !important;
      /deep/ .van-radio__label {
        margin-left: 4px !important;
      }
    }
  }
}
</style>
