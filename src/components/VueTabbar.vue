<template>
  <div class="VueTabbar">
  <mt-header fixed :title="active"></mt-header>
  <mt-tab-container swipeable v-model="active">
    <mt-tab-container-item id="tab-container1">
      <mt-cell v-for="(n, index) in 15" :key="index" title="tab-container 1"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container2">
      <mt-cell v-for="(n, index) in 5" :key="index" title="tab-container 2"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container3">
      <mt-cell v-for="(n, index) in 7" :key="index" title="tab-container 3"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container4">
      <mt-cell v-for="(n, index) in 7" :key="index" title="tab-container 4"></mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
  <mt-tabbar fixed v-model="active">
    <mt-tab-item id="tab-container1">
      <img slot="icon" src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg">
      外卖
    </mt-tab-item>
    <mt-tab-item id="tab-container2">
      <img slot="icon" src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg">
      订单
    </mt-tab-item>
    <mt-tab-item id="tab-container3">
      <img slot="icon" src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg">
      发现
    </mt-tab-item>
    <mt-tab-item id="tab-container4">
      <img slot="icon" src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg">
      我的
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'VueTabbar',
  data () {
    return {
      active: 'tab-container1'
    }
  },
  methods: {
  }
}
</script>
