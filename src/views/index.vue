<!--
 * @Author: lzh
 * @Date: 2022-09-29 15:55:04
 * @LastEditors: lzh
 * @LastEditTime: 2022-09-30 16:13:09
 * @Description: 深浅拷贝克隆
-->
<template>
  <div class="self_body">
    <h2>index</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 深淺拷貝  1.排除內容（null || undefined）2.日期類型 3.正則類型 4.普通值或者函數
    deepClone(obj, hash = new WeakMap()) {
      // 处理null或者undefined
      if (obj === null) return obj;
      // 处理日期类型
      if (obj instanceof Date) return new Date(obj);
      // 处理正则类型
      if (obj instanceof RegExp) return new RegExp(obj);
      // 普通值或函数不需要深拷贝
      if (typeof obj !== 'object') return obj;
      // 对象进行深拷贝
      if (hash.get(obj)) return hash.get(obj);
      let cloneObj = new obj.constructor();
      // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
      hash.set(obj, cloneObj);
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          // 实现一个递归拷贝
          cloneObj[key] = this.deepClone(obj[key], hash);
        }
      }
      return cloneObj;
    },
    fun(){
      return 1
    },
    fun2(){
      return 2
    },
  },
  created() {
    let obj = {
      name: 'nihao',
      number: 123,
      fun: this.fun
    };
    let cloneObj = this.deepClone(obj,new WeakMap());
    cloneObj.name = 'haha'
    cloneObj.fun = this.fun2;
    console.log(obj.fun());
    console.log(cloneObj.fun());
    console.log('obj',obj);
    console.log('cloneObj',cloneObj);
  },
};
</script>

<style lang="less" scoped>
.self_body {
}
</style>
