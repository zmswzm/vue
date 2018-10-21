<template>
  <div class="Login">
    <mt-field placeholder="手机号" type="tel" v-model="phone"></mt-field>
    <mt-field placeholder="密码" type="password" v-model="password"></mt-field>
    <mt-button plain type="primary" size="large" @click="login">登录</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'Login',
  data () {
    return {
      phone: null,
      password: null
    }
  },
  methods: {
    login () {
      this.$store.commit('$_setStorage', {
        name: 'neal',
        token: 12345
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
