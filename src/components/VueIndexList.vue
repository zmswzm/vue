<template>
  <div class="VueIndexList">
    <mt-header fixed title="VueIndexList">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
      <mt-index-list class = "indexList" @click="handClick3">
        <mt-index-section v-for="(item, index) in blist" :index="item.title" :key="index">
          <div v-for="(sec, index) in item.items" :key="index">
            <img slot="icon" src="../assets/logo.png" width="24" height="24">
            <span>{{ sec.name }}</span>
          </div>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<style>
  html {
    background-color:yellow;
    overflow:hidden;
  }
  .mint-indexsection {
    text-align: left;
  }
  .mint-cell-wrapper {
    background-size: 120% 0px;
  }
  .mint-indexsection-index {
    background-color:yellow;
  }
  .mint-indexlist .mint-indexlist-nav {
    background-color:yellow;
  }
  .mint-cell {
    background-color:yellow;
    flex: 0 0 auto;
  }
  img {
    border-radius: 100%;
    background: #8AC007;
    margin-right: 20px;
    width: 45px;
    height: 45px;
  }
</style>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'VueIndexList',
  data () {
    return {
      blist: this.$store.getters.doneUsers,
      msg: '/components'
    }
  },
  methods: {
    handClick3 (value) {
      Toast({
        message: value,
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>
