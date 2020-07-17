import Vue from 'vue'
import VueRouter from 'vue-router'
import nob from '../views/NobPuzzlePage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'WelcomeLittlePuzz',
    component: nob
  }
]

const router = new VueRouter({
  routes
})

export default router


//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
