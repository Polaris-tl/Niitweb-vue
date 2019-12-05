import Vue from 'vue'
import VueRouter from 'vue-router'
import Shizi from '../components/Shizhi/Shizhi'
import Jianjie from '../components/Jianjie/Jianjie.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Shizi },
  { path: '/jianjie', component: Jianjie }
]
const router = new VueRouter({
  routes
})

export default router