<template>
  <div class="flex h-screen " id="app">
    <drawer/>
    <div class="flex-1 flex flex-col overflow-hidden">
      <navigation/>

      <router-view class="flex-1 overflow-x-hidden overflow-y-auto"></router-view>
    </div>
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
