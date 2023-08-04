<template>
  <div class="app">
    <div class="intro">
      <MyHeadline/>
    </div>
    <div class="navbar">
      <MyNav/>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MyNav from "./components/MyNav"
import MyHeadline from "./components/MyHeadline"
export default {
  name: 'App',
  components: {
    MyNav,
    MyHeadline,
  },
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100%;

  .intro {
    display: flex;
    flex-direction: row;
    margin: auto;
  }
  .navbar {
    width: 50%;
    margin: auto;
  }
  .view {
    width: 50%;
    margin: auto;
  }
}
</style>
