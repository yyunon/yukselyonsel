<template>
  <div class="app">
    <div class="intro">
      <p>Y&uuml;ksel Y&ouml;nsel</p>
      <a href="https://www.linkedin.com/in/yukselyonsel" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #729fcf;" />
      </a>
      <a href="https://github.com/yyunon" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" style="color: #729fcf;" />
      </a>
    </div>
    <div class="navbar">
      <MyNav/>
    </div>
    <router-view/>
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
.app {
  display: flex;
  flex-direction: column;
  top: 50%;
  height: 100%;

  .intro {
    display: flex;
    flex-direction: row;
  }
}
</style>
