<template>
  <div class="VueToast">
    <mt-header fixed title="Toast">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-button plain type="primary" size="large" @click="handClick1">点击弹出Toast</mt-button>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick2">点击弹出带有icon的Toast</mt-button>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick3">自定义Toast的位置</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'VueToast',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handClick1 () {
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      })
    },
    handClick3 () {
      let instance = Toast('提示信息')
      setTimeout(() => {
        instance.close()
      }, 2000)
    },
    handClick2 () {
      Toast({
        message: '操作成功',
        iconClass: 'icon icon-success'
      })
    }
  }
}
</script>
