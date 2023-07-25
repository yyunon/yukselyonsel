<template>
  <div class="app">
    <MyNav />
    <router-view />
  </div>
</template>

<script>
import MyNav from "./components/MyNav"
export default {
  name: 'App',
  components: {
    MyNav,
  },
}
</script>

<style lang="scss">
</style>
