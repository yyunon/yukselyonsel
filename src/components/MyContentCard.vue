<template>
    <div class="m-4 w-80 content-container shadow p-5" :style="cssProps" @click="changeStateWithView(blogI)">
      <div class="content h-full w-auto">
        <router-link class="flex flex-col justify-between h-full w-auto" :to="{name: 'blogView'}">
          <div>
            <img class="w-auto h-20px max-h-40" :src="blog.logoImagePath">
          </div>
          <div>
            <h3 class="text-xl"> {{ blog.title }}</h3>
            <p class="text-sm text-gray-500"> {{ blogI.metadata }}</p>
            <p class="text-base"> {{ blog.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import {PageStateE} from "../store/index.js"
import events from "../utils/api.js"
export default {
  name: 'MyContentCard',
  props: ['contentIndex', 'blogI'],
  data() {
    return {
      blog: {
        id: "",
        title: "",
        description: "",
        metadata: "",
        contentType: "",
        sourcePath: "",
        createdAt: "",
        logoImagePath: "",
      },
      imgURL: null,
    }
  },
  components: {
  },
  methods: {
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
    async changeStateWithView(blog) {
      this.$store.commit({type: 'changePageState', state: PageStateE.ContentView });
      const b = await this.fetchBlogData(blog.id);
      this.$store.commit({type: 'updateBlogUnderView', blog: b});
      this.$store.commit({type: 'updateContentTypeUnderView', contentType: b.contentType});
    },
  },
  created() {
    this.blog = this.blogI
  },
  async mounted() {
  },
  computed: {
    cssProps() {
      return {
          '--animation-delay': this.contentIndex + 1
      }
    }
  }
}
</script>

<style lang="scss">
.content-container {
  animation: slide-in-opaque;
  animation-delay: calc(0.5s + .1s * var(--animation-delay));
  animation-duration: .3s;
  animation-fill-mode: backwards;
}

@keyframes slide-in-opaque {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
