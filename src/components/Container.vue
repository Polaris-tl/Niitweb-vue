<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import router from '../router/index'
export default {
  name:'container',
  router
}
</script>