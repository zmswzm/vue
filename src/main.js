// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Header, Cell, Loadmore, Spinner, InfiniteScroll, Actionsheet, Popup, Lazyload, Range, Picker, DatetimePicker, IndexList, IndexSection, PaletteButton, Tabbar, TabItem, TabContainer, TabContainerItem, Field } from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll)
Vue.use(Lazyload)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Popup.name, Popup)
Vue.component(Range.name, Range)
Vue.component(Picker.name, Picker)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(PaletteButton.name, PaletteButton)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Field.name, Field)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (!this.$store.getters.getStorage) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})
