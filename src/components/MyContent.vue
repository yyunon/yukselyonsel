<template>
  <div class="space-y-4 sm:m-20 overflow-scroll">
    <div v-html="ydiv($store.state.blogUnderView.content)"></div>
  </div>
</template>

<script>
import events from "../utils/api.js"

export default {
  name: 'MyContentCard',
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
    ydiv(inp) {
      return `<div class="max-w-full whitespace-pre-line overflow-scroll">${inp}</div>`
    }
  },
  created() {
		console.log(this.$route.name)
  },
  async mounted() {
		console.log(this.$route.name)
  }
}
</script>

<style>
@layer no-tailwindcss {
  /* This layer is disabled */
  .no-tailwindcss {
      all: initial;
  }
}
</style>