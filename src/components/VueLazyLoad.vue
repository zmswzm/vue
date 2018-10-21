<template>
  <div class="VueLazyLoad">
    <mt-header fixed title="Toast">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item">
      </li>
    </ul>
  </div>
</template>

<style>
  image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul li{
list-style-type:none;
}
</style>

<script>
export default {
  name: 'VueLazyLoad',
  data () {
    return {
      list: [
        'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg',
        'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg',
        'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg',
        'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c75c10385343fbf2cdfb712fb27eca8064388fe3.jpg'
      ]
    }
  }
}
</script>
