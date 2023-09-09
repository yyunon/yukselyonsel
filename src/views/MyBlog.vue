<template>
  <div class="flex flex-col mx-5 w-full font-ralewaysans">
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" >
    <div class="font-extralight text-5xl text-center" >
      <h1>On the Blog</h1>
    </div>

    <div class="inline-flex flex-row justify-between pt-5 p-1" >
        <div class="font-light m-auto" v-for="item of contentTypes" :key="item.contentType">
          <a href='#' class="no-underline" @click="changeContentTypeWithView(item.contentType)">
            {{ item.contentType }}
          </a>
        </div>
    </div>

    <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700">

    <div v-show="error">
      Sorry :(, server is down. Please try again in 30 min.
    </div>

    <div class="flex pt-10">
      <div class="flex flex-col md:flex-row w-full">
        <div class="flex md:flex-row" v-for="(x, index) in blogs" :key="index" v-show='(x.contentType == $store.state.contentTypeUnderView) || ($store.state.contentTypeUnderView == "All")' >
          <MyContentCard v-bind:contentIndex="index" v-bind:blogI="x"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyContentCard from "../components/MyContentCard.vue"
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
      error: false,
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
        this.error = true;
      }
    },
    async getBlogs() {
      try {
        const response = await events.get("/markdowns")
        if (response.status == 200) {
          console.log(response.data)
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
    MyContentCard,
  },
};
</script>