<template>
  <div class="flex justify-between px-4 py-2 fixed top-0 -inset-x-0 bg-white">
    <img class="w-8 h-auto" src="@/assets/images/logo.png">

    <input id="memu_check" type="checkbox"/>
    <div class="relative w-4 h-5">
      <label id="menu" for="memu_check" class="absolute m-auto -inset-y-0 block w-6 bg-black h-1"></label>
    </div>

    <ul class="invisible md:visible items-center">
      <navigation-item name="Home" url="https://www.google.com"></navigation-item>
      <navigation-item name="About" url="https://www.apple.com"></navigation-item>
      <navigation-item name="Contact" url="https://www.facebook.com"></navigation-item>
    </ul>
  </div>
</template>

<script>
import NavigationItem from '@/components/NavigationItem'
export default {
  components: { NavigationItem },
  name: 'Header',
  component: {
    NavigationItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #menu:before {
    left:0;
    top:-0.5rem;
    content: '';
    width: 1.5rem;
    height: 0.25rem;
    position: absolute;
    background-color: black;
  }
  #menu:after {
    left:0;
    bottom: -0.5rem;
    content: '';
    width: 1.5rem;
    height: 0.25rem;
    position: absolute;
    background-color: black;
  }
</style>
