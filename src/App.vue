<template>
  <div class="flex flex-col h-screen w-screen scroll-smooth dark:text-white dark:bg-slate-800">
    <MyNav />
    <div class="grow dark:bg-slate-800 z-1">
      <router-view />
    </div>
  </div>
</template>

<script>
//import {initgl} from "./utils/graphics/webglinit"
import MyNav from "./components/MyNav"
export default {
  name: 'App',
  components: {
    MyNav,
},
  data() {
    return {
    }
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
      this.$store.commit({type: 'updateMobileState', mobile: this.isMobile() });
  },
  mounted() {
    //initgl("#glCanvas");
  }
}
</script>

<style lang="scss">
body {
  background-color: rgb(255, 255, 255);
  .app {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    @media(min-width:500px) {
      .view {
        margin: auto;
      }
    }
  }
}
</style>
