<template>
  <div class="relative" id="app">
    <navigation/>
    <drawer/>
    <router-view class="h-screen"></router-view>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import Drawer from '@/components/Drawer'
export default {
  components: {
    Navigation,
    Drawer
  }
}
</script>
<style>
html, body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
