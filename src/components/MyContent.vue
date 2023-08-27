<template>
  <div class="w-80 animation:slide-in" v-show='($store.state.PageState == "blogView")'>
    <a href="#" class="click-div remove-style-hrefs" @click="changeStateWithView(blog)">
    <div class="blog-container" v-show='($store.state.PageState == "blogView")'>
        <div class="content">
          <img class="logo" :src="blog.logoImagePath">
          <h3> {{ blog.title }}</h3>
        </div>
    </div>
    </a>
  </div>
</template>

<script>
import {PageStateE} from "../store/index.js"
import events from "../utils/api.js"

export default {
  name: 'MyContent',
  props: ['contentIndex', 'blogI'],
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
      imgURL: null,
    }
  },
  components: {
  },
  methods: {
    async changeStateWithView(blog) {
      this.$store.commit({type: 'changePageState', state: PageStateE.ContentView });
      const b = await this.fetchBlogData(blog.id);
      this.$store.commit({type: 'updateBlogUnderView', blog: b});
      this.$store.commit({type: 'updateContentTypeUnderView', contentType: blog.contentType});
    },
    async fetchBlogData(blogI) {
      try {
        const response = await events.get('/markdowns/' + blogI + '/content')
        if (response.status == 200) {
          return response.data;
        }
      } catch(err) {
        console.log(err);
      }
    },
  },
  created() {
    this.blog = this.blogI
  },
  async mounted() {
  }
}
</script>

<style lang="scss">
.content-container {
  animation: slide-in .5s;
  animation-delay: calc(.5s + v-bind('contentIndex'));
  animation-fill-mode: backwards;
  width: 33rem;
  height: auto;

  .blog-container {
    margin-top: 0;
    margin-right: 10px;
    padding-top: 5px;
    box-shadow: 2px 2px 2px rgba(131, 131, 131, 0.7);
    border: 1px;
    border-image-slice: 1;

    
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
    img {
      display: block;
      height:100%;
      margin: auto;
      max-width: 100%;
    }
    &:hover {
      box-shadow: none;
      transition: .3s ease all;
    }
  }

}
.remove-style-hrefs {
  color:inherit;
  text-decoration:none;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0.25;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

</style>
