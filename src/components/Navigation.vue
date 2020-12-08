<template>
  <div class="flex justify-between items-center px-4 py-2 top-0 -inset-x-0 bg-white">
    <img class="w-8 h-auto" src="@/assets/images/logo.png">

    <input id="memu_check" class="hidden" v-model="isOpen" type="checkbox"/>

    <label id="menu" for="memu_check" class="inline-block md:hidden relative w-6 h-5 cursor-pointer">
      <i class="absolute m-auto -inset-0 block bg-black h-1"></i>
    </label>

    <ul class="hidden md:inline-block items-center">
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
  data: function () {
    return {
      isOpen: false
    }
  },
  component: {
    NavigationItem
  },
  created: function () {
    this.isOpen = this.$store.state.isOpen
  },
  watch: {
    isOpen: function () {
      this.$store.commit('clickMenu', this.isOpen)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #menu:before {
    left:0;
    content: '';
    width: 100%;
    height: 0.25rem;
    position: absolute;
    background-color: black;
  }
  #menu:after {
    left:0;
    bottom: 0rem;
    content: '';
    width: 100%;
    height: 0.25rem;
    position: absolute;
    background-color: black;
  }

  #memu_check[type="checkbox"]~#menu:before {
    transition: transform .2s ;
  }
  #memu_check[type="checkbox"]~#menu:after {
    transition: transform .2s ;
  }
  #memu_check[type="checkbox"]:checked~#menu i {
    visibility: hidden;
  }
  #memu_check[type="checkbox"]:checked~#menu:before {
    transform: translateY(.5rem) rotate(45deg) ;
  }
  #memu_check[type="checkbox"]:checked~#menu:after {
    transform: translateY(-0.5rem) rotate(135deg) ;
  }
</style>
