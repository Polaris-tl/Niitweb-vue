import Vue from 'vue'
import VueRouter from 'vue-router'

// import Shizi from '../components/Shizhi/Shizhi'
// import Jianjie from '../components/Jianjie/Jianjie.vue'
// import Index from '../components/Index/Index.vue'
// import Luxian from '../components/Luxian/Luxian.vue'
// import Zhuanye from '../components/Zhuanye/Zhuanye.vue'
// import Xueyuan from '../components/Xueyuan/Xueyuan.vue'
// import Xinwen from '../components/Xinwen/Xinwen.vue'
// import NewsList from '../components/Xinwen/NewsList.vue'
// import NewsDetail from '../components/Xinwen/NewsDetail.vue'
//实现异步加载
const Shizi = () => import('../components/Shizhi/Shizhi')  
const Jianjie = () => import('../components/Jianjie/Jianjie.vue')  
const Index = () => import('../components/Index/Index.vue')  
const Luxian = () => import('../components/Luxian/Luxian.vue')  
const Zhuanye = () => import('../components/Zhuanye/Zhuanye.vue')  
const Xueyuan = () => import('../components/Xueyuan/Xueyuan.vue')  
const Xinwen = () => import('../components/Xinwen/Xinwen.vue')  
const NewsList = () => import('../components/Xinwen/NewsList.vue')  
const NewsDetail = () => import('../components/Xinwen/NewsDetail.vue')  

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index},
  { path: '/jianjie', component: Jianjie },
  { path: '/shizhi', component: Shizi },
  { path: '/luxian', component: Luxian },
  { path: '/zhuanye', component: Zhuanye },
  { path: '/xueyuan', component: Xueyuan },
  { path: '/xinwen', component: Xinwen ,
    children: [
      {
        path: '',
        component: NewsList
      },
      {
        name:'detail',
        path: 'detail/:id',
        component: NewsDetail
      }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass:'active'
})

export default router