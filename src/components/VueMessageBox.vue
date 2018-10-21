<template>
  <div class="VueMessageBox">
    <mt-header fixed title="MessageBox">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-button plain type="primary" size="large" @click="handClick1">点击弹出messagebox1</mt-button>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick2">点击弹出messagebox2</mt-button>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick3">点击弹出messagebox3</mt-button>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'

export default {
  name: 'VueMessageBox',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handClick1 () {
      MessageBox('提示', '操作成功')
    },
    handClick2 () {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
    },
    handClick3 () {
    }
  }
}
</script>
