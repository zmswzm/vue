<template>
  <div class="VueInfiniteScroll">
    <mt-header fixed title="VueInfiniteScroll">
      <router-link to="/components" slot="left">
      <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueInfiniteScroll',
  data () {
    return {
      list: [],
      loading: false
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(lastValue + i)
        }
        this.loading = false
      }, 1500)
    }
  },
  created () {
    for (let i = 1; i <= 40; i++) {
      this.list.push(i)
    }
  }
}
</script>
