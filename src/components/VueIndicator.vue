<template>
  <div class="VueIndicator">
    <mt-header fixed title="Indicator">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-button plain size="large" @click="handClick1">点击弹出Indicator</mt-button>
    <br>
    <mt-button plain size="large" @click="handClick2">可配置的Indicator</mt-button>
    <br>
    <mt-button plain size="large" @click="handClick3">带文字的Indicator</mt-button>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'

export default {
  name: 'VueIndicator',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handClick1 () {
      Indicator.open()
      setTimeout(() => {
        Indicator.close()
      }, 2000)
    },
    handClick2 () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        Indicator.close()
      }, 2000)
    },
    handClick3 () {
      Indicator.open('加载中...')
      setTimeout(() => {
        Indicator.close()
      }, 2000)
    }
  }
}
</script>
