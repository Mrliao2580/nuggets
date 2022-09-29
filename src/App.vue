<!--
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-29 15:51:05
 * @Description: app
-->
<template>
  <div id="app">
    <div class="right-box">
      <div class="changeLang">
        <div @click="changLang('zh')" class="chinese">中文</div>
        <div class="long-string">丨</div>
        <div @click="changLang('en')" class="english">English</div>
      </div>
      <div class="info">
        <p class="time_name">
          <span>👋 </span>
          <span v-text="getTimeName()"></span>
          <span>&nbsp;我是</span>
        </p>
        <p class="user_name">&nbsp;Mr_liao</p>
        <p class="desc">
          这有关于
          <b>产品、设计、开发</b>
          相关的问题和看法。
        </p>
        <p class="desc">
          希望你可以在这里找到对你有用的<b>知识</b>和<b>教程</b>。
        </p>
        <p class="desc">保持热爱</p>
        <p class="desc">奔赴山海</p>
        <div class="qq_wx">
          <div class="icon">qq</div>
          &nbsp;
          <div class="icon">wx</div>
        </div>
        <div class="img-box">
          <img src="http://cdn.heblogs.cn/1649044225311_avatar-large-1.webp" />
        </div>
      </div>
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
    getTimeName() {
      let state = '';
      const hours = new Date().getHours()
      if (hours >= 0 && hours <= 10) {
        state = `早上好!`;
      } else if (hours > 10 && hours <= 11) {
        state = `上午好!`;
      } else if (hours > 11 && hours <= 13) {
        state = `中午好!`;
      } else if (hours > 13 && hours <= 18) {
        state = `下午好!`;
      } else if (hours > 18 && hours <= 21) {
        state = `晚上好!`;
      } else if (hours > 21) {
        state = `夜深了注意休息~`;
      }
      return state;
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.right-box {
  position: fixed;
  top: 10px;
  right: 40px;
  background-color: #000;
  color: #fff;
  padding: 25px;
  letter-spacing: 1.5px;
  overflow: hidden;
  height: 360px;
  width: 240px;
  border-radius: 14px;
  .changeLang {
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 设置文字不能被选中
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 144px;
    margin-left: auto;
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
  .info {
    padding-top: 16px;
    .time_name {
      font-size: 15px;
      line-height: 32px;
    }
    .user_name {
      font-size: 26px;
      line-height: 50px;
    }
    .desc {
      font-size: 15px;
      line-height: 26px;
      padding-top: 10px;
      color: hsla(0, 0%, 100%, 0.8);
    }
  }
  .qq_wx {
    display: flex;
    padding-top: 10px;
    .icon {
      border-radius: 50%;
      background-color: #fff;
      width: 36px;
      height: 36px;
      color: red;
      text-align: center;
      line-height: 36px;
      cursor: pointer;
    }
  }
  .img-box {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(70px);
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.48, -0.21, 0, 1.5);
    &:hover {
      transform: translateY(40px);
    }
    img {
      width: 130px;
    }
  }
}
</style>
