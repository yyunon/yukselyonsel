<template>
  <div class="space-y-4 sm:m-20 m-10">
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
      console.log(inp);
      return `<div class="child max-w-full whitespace-pre-wrap break-words">${inp}</div>`
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
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.child pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>