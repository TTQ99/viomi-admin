import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/12",
      component: () => import('../components/Test.vue')
    },
  ]
})

export default router
