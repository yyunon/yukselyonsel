<template>
  <div class="content-container">
    <div class="container" v-show="!blogView">
      <a href="#" class="click-div" @click="changeState('blog.id')">
        <div class="content">
          <img class="logo" src="blog.logoImagePath">
          <h3> {{ blog.title }}</h3>
        </div>
      </a>
    </div>
    <div class="post" v-show="blogView">
      <MyMdRenderer :source="blog.content"/>
    </div>
  </div>
</template>

<script>
import MyMdRenderer from "../components/MyMdRenderer.vue"
import events from "../utils/api.js"

export default {
  name: 'MyContent',
  props: ['blogI'],
  data() {
    return {
      blog: {
        id: "",
        title: "",
        contentType: "",
        sourcePath: "",
        content: "",
        createdAt: "",
        logoImagePath: "",
      },
    }
  },
  components: {
    MyMdRenderer,
  },
  methods: {
    changeState(postId) {
      this.blogView = !this.blogView;
      this.postId = postId;
    },
    async getBlog(blogI) {
      try {
        const response = await events.get("/markdowns/" + blogI.id)
        this.blog = response.data;
        console.log(this.blog)
      } catch(err) {
        console.log(err);
      }
    },
    async fetchGitImage() {
      const getBase64Image = async res => {
        const blob = await res.blob();
      }
    }
  },
  created() {
    this.blog = this.blogI;
    this.getBlog(this.blog);
  },
}
</script>

<style lang="scss">
  .container {
    margin-top: 0;
    padding-top: 5px;
    width: 33%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
    border: double 2px;
    border-image-slice: 1;
    border-style: solid;
    border-color: #cc9999;

    
    .content {
      margin-left: 5%;
      margin-right: 5%;
    }
    .click-div {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
    a {
      color:inherit;
      text-decoration:inherit;
    }
    img {
      display: block;
      height:100%;
      margin: auto;
      max-width: 100%;
    }
  }
</style>
