<template>
  <div class="VueActionsheet">
    <mt-header fixed title="Action sheet">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-button plain type="primary" size="large" @click="handClick1">点击上拉action sheet</mt-button>
    <br>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick2">不带取消按钮action sheet</mt-button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-actionsheet :actions="actions1" v-model="sheetVisible1" cancelText=""></mt-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'VueActionsheet',
  data () {
    return {
      sheetVisible: false,
      sheetVisible1: false,
      actions: [
        {
          name: '拍照',
          methods: {

          }
        },
        {
          name: '从相册选择',
          methods: {

          }
        }
      ],
      actions1: [
        {
          name: '拍照',
          methods: {

          }
        },
        {
          name: '从相册选择',
          methods: {

          }
        }
      ]
    }
  },
  methods: {
    handClick1 () {
      this.sheetVisible = true
    },
    handClick2 () {
      this.sheetVisible1 = true
    }
  }
}
</script>
