<template>
  <div class="VueRange">
    <mt-header fixed title="Range">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-range v-model="rangeValue"></mt-range>
    <br>
    <mt-range v-model="rangeValue" :min="10" :max="90" :step="10" :bar-height="5"></mt-range>
    <br>
    <mt-range v-model="rangeValue">
      <div slot="start">0</div>
      <div slot="end">100</div>
    </mt-range>
  </div>
</template>

<script>
export default {
  name: 'VueRange',
  data () {
    return {
      rangeValue: 10
    }
  }
}
</script>
