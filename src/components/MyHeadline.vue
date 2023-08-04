<template>
  <div class="header">
    <router-link class="link" :to="{name: 'MyHome'}">
      <img src="../assets/pineapple.png" @onrender="rotate" @mouseover="rotate" @click="rotate" class="transition" v-bind:style="{transform: `rotate(${img_degree}deg)`}" >
    </router-link>
    <p class="name">Y&uuml;ksel Y&ouml;nsel</p>
    <p class="whoami">Software Engineer, Data Enthusiast</p>
    <div class="icons">
      <a href="https://www.linkedin.com/in/yukselyonsel" class="link" target="_blank">
        <font-awesome-icon class="fa-xl" :icon="['fab', 'linkedin']" style="color: #cc9999;" />
      </a>
      <a href="https://github.com/yyunon" class="git" target="_blank">
        <font-awesome-icon class="fa-xl" :icon="['fab', 'github']" style="color: #cc9999;" />
      </a>
    </div>
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
    font-family: 'Raleway', sans-serif; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    
    .transition {
      transition: transform 0.5s ease-in-out;
    }
    img {
      width: 48px;
      height: 48px;
      cursor: pointer;
      
    }
    .name {
      font-size: 20px;
      font-weight: bold;
      margin:0;
    }

    .whoami {
      font-size: 12px;
      font-style: italic;
      margin:0;
    }

    .icons {
      .git {
        padding-top: 5px;
        padding-left: 5px;
      }
    }
  }
</style>
