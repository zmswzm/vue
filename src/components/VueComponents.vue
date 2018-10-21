<template>
  <div class="VueComponents">
    <mt-header fixed title="JS Components">
      <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="Toast" to="/vueToast" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="Indicator" to="/vueIndicator" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="LoadMore" to="/vueLoadMore" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="InfiniteScroll" to="/vueInfiniteScroll" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="MessageBox" to="/vueMessageBox" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="Actionsheet" to="/vueActionsheet" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="Popup" to="/vuePopup" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="LazyLoad" to="/vueLazyLoad" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="Range" to="/vueRange" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="Picker" to="/vuePicker" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="DatetimePicker" to="/vueDateTimePicker" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="VueIndexList" to="/vueIndexList" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="VueDragExam" to="/vueDragExam" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="VueDrag" to="/vueDrag" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
    <mt-cell title="VueTabbar" to="/vueTabbar" is-link align="left">
      <img slot="icon" src="../assets/logo.png" width="24" height="24" align="left">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'VueComponents',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
