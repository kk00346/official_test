<template>
  <a v-bind:href="url" target="_blank" class="ml-4">
      <font-awesome-icon icon="user-secret" />
      <span class="ml-1">{{name}}</span>
  </a>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    name: String,
    url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
