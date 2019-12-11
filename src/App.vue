<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import router from './router/index'
import store from './store/store.js'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  router,
  store
}
</script>

<style>
@import './css/init.less';
</style>
