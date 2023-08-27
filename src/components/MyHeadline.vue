<template>
  <div class="flex center">
      <router-link class="link" :to="{name: 'home'}">
      <p class="name self-center text-3xl font-light whitespace-nowrap dark:text-white">y.{{ $route.name }}</p>
      </router-link>
    <!--
    <p class="name">Y&uuml;ksel Y&ouml;nsel</p>
    <p class="whoami">Software Engineer</p>
    <div class="icons">
      <a href="https://www.linkedin.com/in/yukselyonsel" class="link" target="_blank">
        <font-awesome-icon class="fa-xl" :icon="['fab', 'linkedin']" style="color: #0072b1;" />
      </a>
      <a href="https://github.com/yyunon" class="git" target="_blank">
        <font-awesome-icon class="fa-xl" :icon="['fab', 'github']" style="color: #000000;" />
      </a>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'MyHeadline',
  data() {
    return {
      img_degree: 0,
    }
  },
  methods: {
    rotate() {
      this.img_degree += 360;
    }
  }
}
</script>