<template>
  <div class="VueDateTimePicker">
    <mt-header fixed title="DateTimePicker">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-button plain type="primary" size="large" @click="handClick1">点击弹出DateTime</mt-button>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick2">自定义DateTime</mt-button>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick3">回调函数</mt-button>
    <mt-datetime-picker
      ref="picker1"
      type="DateTime"
      v-model="pickerValue">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      v-model="pickerVisible"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      v-model="pickerVisible"
      type="datetime"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'VueDateTimePicker',
  data () {
    return {
      pickerValue: '',
      pickerVisible: ''
    }
  },
  methods: {
    handClick1 () {
      this.$refs.picker1.open()
    },
    handClick2 () {
      this.$refs.picker2.open()
    },
    handClick3 () {
      this.$refs.picker3.open()
    },
    handleConfirm (value) {
      Toast({
        message: value,
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>
