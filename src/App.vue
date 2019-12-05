<template>
  <div id="app">
    <Header />
    <Container />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Container from './components/Container'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Container
  }
}
</script>

<style>
@import './css/init.less';
</style>
