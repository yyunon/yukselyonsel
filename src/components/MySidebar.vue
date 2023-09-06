<template>
  <div class="header">
      <router-link class="link" :to="{name: 'home'}">
      <p class="name">y.{{ $route.name }}</p>
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

<style lang="scss">
  .header {
    float: left;
    margin-left: 50px;
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'Comfortaa', cursive;
    transition: 400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) text-shadow,
    400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) letter-spacing;

    .link {
      text-decoration: none;
      color: inherit;
    }
    
    .transition {
      transition: transform 0.5s ease-in-out;
    }
    img {
      width: 48px;
      height: 48px;
      cursor: pointer;
      
    }
    .name {
      font-size: 28px;
      font-weight: bold;
    }

    .whoami {
      font-size: 12px;
      font-style: italic;
    }

    .icons {
      .git {
        padding-top: 5px;
        padding-left: 5px;
      }
    }
  }
</style>
