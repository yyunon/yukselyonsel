<template>
  <div class="flex flex-col mx-5 w-full font-ralewaysans">
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" v-show='($store.state.PageState == "blogView")'>
    <div class="font-thin text-5xl text-center" v-show='($store.state.PageState == "blogView")'>
      <h1>On the Blog</h1>
    </div>

    <div class="inline-flex flex-row justify-between pt-5 p-1" v-show='($store.state.PageState == "blogView")'>
        <div class="font-thin m-auto" v-for="item of contentTypes" :key="item.contentType">
          <a href='#' class="no-underline" @click="changeContentTypeWithView(item.contentType)">
            {{ item.contentType }}
          </a>
        </div>
    </div>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" v-show='($store.state.PageState == "blogView")'>

    <div class="flex flex-row p-10">
      <div class="justify-center w-full">
        <div class="" v-for="(x, index) in blogs" :key="index" v-show='($store.state.PageState == "blogView") && ((x.contentType == $store.state.contentTypeUnderView) || ($store.state.contentTypeUnderView == "All"))'>
          <MyContent v-bind:contentIndex="index" v-bind:blogI="x"/>
        </div>
        <div class="post" v-show='($store.state.PageState == "contentView")'>
          <MyMdRenderer :source='blogUnderView.content' v-if="blogUnderView"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyMdRenderer from "../components/MyMdRenderer.vue"
import MyContent from "../components/MyContent.vue"
import {PageStateE} from "../store/index.js"
import events from "../utils/api.js"

export default {
  name: "MyBlog",
  data() {
    return {
      blogView: false,
      postId: "",
      markdownContent: '',
      contentType: {
        contentType: '',
      },
      contentTypes: [],
      blogs: [],
    }
  },
  methods: {
    changeStateToRegular() {
      this.$store.commit({type: 'changePageState', state: PageStateE.BlogView });
      console.log(this.$store.state.PageState);
    },
    changeState() {
      this.$store.commit({type: 'changePageState', state: PageStateE.ContentView });
    },
    readFile(fileName) {
      var file = new File(fileName);
      var fileReader = new FileReader();
      fileReader.onload = function(res) {
        this.markdownContent = res.target.result; 
      }
      fileReader.readAsText(file);
    },
    async getContentTypes() {
      try {
        const response = await events.get("/markdowns/contentTypes")
        this.contentTypes = response.data;
      } catch(err) {
        console.log(err);
      }
    },
    async getBlogs() {
      try {
        const response = await events.get("/markdowns")
        if (response.status == 200) {
          this.blogs = response.data;
        }
      } catch(err) {
        console.log(err);
      }
    },
    async changeContentTypeWithView(contentType) {
      this.$store.commit({type: 'updateContentTypeUnderView', contentType: contentType});
      this.$store.commit({type: 'changePageState', state: PageStateE.BlogView });
      await this.getBlogs();
    },
  },
  async created() {
    this.getContentTypes();
    this.$store.commit({type: 'updateContentTypeUnderView', contentType: "All"});
    this.getBlogs();
    
  },
  mounted: function() {
  },
  computed: {
    blogUnderView() {
      console.log("Fetching data")
      return this.$store.state.blogUnderView;
    }
  },
  watch: {
  },
  components: {
    MyContent,
    MyMdRenderer
  },
};
</script>