import Vue from'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const CHANGECOLOR = "changecolor"

const state = {
  color: "#8080c0",
  loading:false
}
const getters = {
  color: () => {
    return "value from store.getters"
  }
}
// Mutation 必须是同步函数
const mutations = {
  changecolor (state,value) {
    state.color = value
  },
  loadingChange (){
    state.loading = !state.loading
  }
}
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {
  changecolorAsyn (context,v) {
    return new Promise((resolve) => {
      context.commit('loadingChange')
      setTimeout(function(){
        context.commit(CHANGECOLOR,v)
        context.commit('loadingChange')
        resolve()
      },1500)
    })
  },
  //async await
  async changecolorAsyn2 (context,v) {
    function getData(v){
      context.commit('loadingChange')
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('loadingChange')         
          resolve(v)
        },1500)
      })
    }
    context.commit(CHANGECOLOR, await getData(v))
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store