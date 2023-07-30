<template>
  <header class="{'scrolled-nav': scrollPosi:tion}">
    <nav>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'MyHome'}">About</router-link></li>
        <li><router-link class="link" :to="{name: 'MyProjects'}">Projects</router-link></li>
        <li><router-link class="link" :to="{name: 'MyBlog'}">Blog</router-link></li>
        <li><router-link class="link" :to="{name: 'MyContact'}">Contact</router-link></li>
        <li><router-link class="link" :to="{name: 'MyCv'}">CV</router-link></li>
      </ul>
    </nav>
  </header>
  <div class="icon">
    <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
  </div>
  <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link class="link" :to="{name: 'MyHome'}">About</router-link></li>
        <li><router-link class="link" :to="{name: 'MyProjects'}">Projects</router-link></li>
        <li><router-link class="link" :to="{name: 'MyBlog'}">Blog</router-link></li>
        <li><router-link class="link" :to="{name: 'MyContact'}">Contact</router-link></li>
        <li><router-link class="link" :to="{name: 'MyCv'}">CV</router-link></li>
      </ul>
  </transition>
</template>

<script>
  export default {
    name: "mynav-bar",
    data() {
      return {
        scrollPosition: null,
        mobile:null,
        mobileNav:null,
        windowWidth:null,
      };
    },
  };
</script>

<style lang="scss" scoped>

header {
  background-color: rgba(0,0,0,0.8);
  z-index: 99;
  width: 100%;
  transition: .5s ease all;
  color: #fff;

  nav {
    display: flex;
    flex-direction: row;
    padding: 0;
    transition: .5s ease all;
    width: 100%;
    margin: auto auto;
    justify-content: center;

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration:none;
      text-align: center;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;

      &:hover {
        color: #cc9999;
        border-color: #cc9999;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
    }
  }
}
</style>
