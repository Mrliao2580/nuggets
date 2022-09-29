<!--
 * @Author: lzh
 * @Date: 2022-09-21 18:24:46
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-29 17:56:30
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
          <span>&nbsp;{{ $t('I am') }}</span>
        </p>
        <p class="user_name">&nbsp;{{ $t('Mr_liao') }}</p>
        <p class="desc" v-if="this.$i18n.locale == 'zh'">
          这有关于
          <b>产品、设计、开发</b>
          相关的问题和看法。
        </p>
        <p
          v-else
          class="desc"
          v-text="
            $t(
              'There are questions and opinions about the product, design, and development'
            )
          "
        ></p>
        <p class="desc" v-if="this.$i18n.locale == 'zh'">
          希望你可以在这里找到对你有用的<b>知识</b>和<b>教程</b>。
        </p>
        <p
          class="desc"
          v-else
          v-text="
            $t('I hope you find some useful knowledge and tutorials here')
          "
        ></p>
        <p class="desc" v-text="$t('Keep the love')"></p>
        <p class="desc" v-text="$t('Go to shanhai')"></p>
        <div class="qq_wx">
          <div
            v-clipboard:copy="'2973075721'"
            v-clipboard:success="firstCopySuccess"
            v-clipboard:error="firstCopyError"
            class="icon q_i"
          >
            <i class="iconfont">&#xe603;</i>
          </div>
          &nbsp;
          <div
            v-clipboard:copy="'15674637680'"
            v-clipboard:success="firstCopySuccess"
            v-clipboard:error="firstCopyError"
            class="icon v_i"
          >
            <i class="iconfont">&#xe60c;</i>
          </div>
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
      const hours = new Date().getHours();
      if (hours >= 0 && hours <= 10) {
        state = `${this.$t('Good morning')}`;
      } else if (hours > 10 && hours <= 11) {
        state = `${this.$t('Good morning')}`;
      } else if (hours > 11 && hours <= 13) {
        state = `${this.$t('Good afternoon')}`;
      } else if (hours > 13 && hours <= 18) {
        state = `${this.$t('Good afternoon')}`;
      } else if (hours > 18 && hours <= 21) {
        state = `${this.$t('Good evening')}`;
      } else if (hours > 21) {
        state = `${this.$t('ate at night pay attention to rest')}`;
      }
      return state;
    },
    copyValue(val) {
      console.log(val);
    },
    firstCopySuccess(e) {
      // console.log('copy arguments e:', e);
      // alert('复制成功!');
      this.$message({
        message: '复制成功!',
        type: 'success',
      });
    },
    firstCopyError(e) {
      // console.log('copy arguments e:', e);
      // alert('复制失败!');
      this.$message.error('复制失败请稍后再试~~');
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
  height: 382px;
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
      font-size: 22px;
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
    justify-content: space-between;
    width: 92px;
    .icon {
      border-radius: 50%;
      background-color: #fff;
      width: 36px;
      height: 36px;
      color: red;
      text-align: center;
      line-height: 36px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 20px;
        color: #000;
        transition: all 0.2s ease-in;
      }
    }
    .v_i:hover {
      background-color: #07c160;
      width: 40px;
      height: 40px;
      transition: all 0.2s ease-in;
      i {
        color: #fff !important;
        font-size: 24px;
      }
    }
    .q_i:hover {
      background-color: #12b7f5;
      width: 40px;
      height: 40px;
      transition: all 0.2s ease-in;
      i {
        color: #fff !important;
        font-size: 24px;
      }
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
