import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
import VueComponents from '@/components/VueComponents'
import VueToast from '@/components/VueToast'
import VueIndicator from '@/components/VueIndicator'
import VueLoadMore from '@/components/VueLoadMore'
import VueInfiniteScroll from '@/components/VueInfiniteScroll'
import VueMessageBox from '@/components/VueMessageBox'
import VueActionsheet from '@/components/VueActionsheet'
import VuePopup from '@/components/VuePopup'
import VueLazyLoad from '@/components/VueLazyLoad'
import VueRange from '@/components/VueRange'
import VuePicker from '@/components/VuePicker'
import VueDateTimePicker from '@/components/VueDateTimePicker'
import VueIndexList from '@/components/VueIndexList'
import VueDragExam from '@/components/VueDragExam'
import VueDrag from '@/components/VueDrag'
import VueTabbar from '@/components/VueTabbar'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components',
      name: 'VueComponents',
      component: VueComponents
    },
    {
      path: '/vueToast',
      name: 'VueToast',
      component: VueToast
    },
    {
      path: '/vueIndicator',
      name: 'VueIndicator',
      component: VueIndicator
    },
    {
      path: '/vueLoadMore',
      name: 'VueLoadMore',
      component: VueLoadMore
    },
    {
      path: '/vueInfiniteScroll',
      name: 'VueInfiniteScroll',
      component: VueInfiniteScroll
    },
    {
      path: '/vueMessageBox',
      name: 'VueMessageBox',
      component: VueMessageBox
    },
    {
      path: '/vueActionsheet',
      name: 'VueActionsheet',
      component: VueActionsheet
    },
    {
      path: '/vuePopup',
      name: 'VuePopup',
      component: VuePopup
    },
    {
      path: '/vueLazyLoad',
      name: 'VueLazyLoad',
      component: VueLazyLoad
    },
    {
      path: '/vueRange',
      name: 'VueRange',
      component: VueRange
    },
    {
      path: '/vuePicker',
      name: 'VuePicker',
      component: VuePicker
    },
    {
      path: '/vueDateTimePicker',
      name: 'VueDateTimePicker',
      component: VueDateTimePicker
    },
    {
      path: '/vueIndexList',
      name: 'VueIndexList',
      component: VueIndexList
    },
    {
      path: '/vueDragExam',
      name: 'VueDragExam',
      component: VueDragExam
    },
    {
      path: '/vueDrag',
      name: 'VueDrag',
      component: VueDrag
    },
    {
      path: '/vueTabbar',
      name: 'VueTabbar',
      component: VueTabbar
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && !store.getters.getStorage) {
    console.log('测试1:' + to.name)
    next()
  } else if (!store.getters.getStorage) {
    console.log('测试2:' + to.name)
    next('login')
  } else {
    console.log('测试3')
    next()
  }
})

export default router
