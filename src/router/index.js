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
const Shizi = () => import(/* webpackChunkName: "tangling1" */ '../components/Shizhi/Shizhi')  
const Jianjie = () => import(/* webpackChunkName: "tangling1" */ '../components/Jianjie/Jianjie.vue')  
const Index = () => import(/* webpackChunkName: "tangling1" */ '../components/Index/Index.vue')  
const Luxian = () => import(/* webpackChunkName: "tangling2" */ '../components/Luxian/Luxian.vue')  
const Zhuanye = () => import(/* webpackChunkName: "tangling2" */ '../components/Zhuanye/Zhuanye.vue')  
const Xueyuan = () => import(/* webpackChunkName: "tangling2" */ '../components/Xueyuan/Xueyuan.vue')  
const Xinwen = () => import(/* webpackChunkName: "tangling3" */ '../components/Xinwen/Xinwen.vue')  
const NewsList = () => import(/* webpackChunkName: "tangling3" */ '../components/Xinwen/NewsList.vue')  
const NewsDetail = () => import(/* webpackChunkName: "tangling4" */ '../components/Xinwen/NewsDetail.vue')  
const Login = () => import(/* webpackChunkName: "login" */ '../components/Login/login.vue')  

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index},
  { path: '/login', component: Login},
  { path: '/jianjie', component: Jianjie },
  { path: '/shizhi', component: Shizi },
  { path: '/luxian', component: Luxian },
  { path: '/zhuanye', component: Zhuanye },
  { path: '/xueyuan',
    component: Xueyuan,
  },
  { path: '/xinwen', 
    name:'xinwen',  
    component: Xinwen ,
    redirect:'/xinwen/list',
    meta:{
      requireAuth:true
    },
    children: [
      {
        path: 'list',
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

router.beforeEach((to, from, next) => {
  //通过sessionStorage判断是否登录
  var isLogin = sessionStorage.getItem('isLogin') || '' 
  //检查路由meta是否包含了requireAuth = true 字段
  var isParentNeedAuth = to.matched.some((item) => { //嵌套路由的父路由设置了 requireAuth = true 时，所有的子路由就不用再设置了 requireAuth = true ，他们都需要验证
    return item.meta.requireAuth == true
  })

  if (isParentNeedAuth) { //需要验证时，再判断登录与否
    if(!isLogin){ //没有登录，跳转登录页面
      next({
        path: '/login',
      })
    }else{ //登录了，跳转目标页面
      next();
    }
  }else { //不需要验证时，跳转目标页面
    next();
  }
})
router.afterEach(() => {
  window.scroll(0, 30);
});

export default router