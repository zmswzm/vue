<template>
  <div class="VuePopup">
    <mt-header fixed title="Popup">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-button plain type="primary" size="large" @click="handClick1">点击上拉Popup</mt-button>
    <br>
    <br>
    <mt-button plain type="primary" size="large" @click="handClick2">点击中间Popup</mt-button>
    <mt-popup v-model="popupVisible1" position="bottom">
      <div>
        <h1>bottom</h1>
      </div>
    </mt-popup>
    <mt-popup v-model="popupVisible2" popup-transition="popup-fade">
      <div>
        <h1>mindle</h1>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'VuePopup',
  data () {
    return {
      popupVisible1: false,
      popupVisible2: false
    }
  },
  methods: {
    handClick1 () {
      this.popupVisible1 = true
    },
    handClick2 () {
      this.popupVisible2 = true
    }
  }
}
</script>
