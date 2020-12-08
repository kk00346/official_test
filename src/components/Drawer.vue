<template>
  <div v-bind:class="isOpen" class="transition duration-1000 ease-in-out transform z-10 absolute h-full bg-yellow-900 w-1/2  md:hidden ">

    <ul class="flex flex-col  items-center">
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
  name: 'Drawer',
  component: {
    NavigationItem
  },
  computed: {
    isOpen: function () {
      if (this.$store.state.isOpen) {
        return ''
      } else {
        return '-translate-x-full'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
