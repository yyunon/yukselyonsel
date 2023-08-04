<template>
  <div class="blobintro" v-show='($store.state.PageState == "blogView")'>
    <p>Welcome to the workspace that I host my writings. Please don't my mind typos that much as this is my first intro to posting my writings...</p>
  </div>
  <div class="hline" v-show='($store.state.PageState == "blogView")'></div>
  <div class="myblog">
    <div class="content-bookmark">
      <font-awesome-icon icon="fa-solid fa-bars" />
      <ul class="content-type-div">
        <li v-for="item of contentTypes" :key="item.contentType">
          <a href='#' style="text-decoration: none; color: inherit;" @click="changeContentTypeWithView(item.contentType)">
            {{ item.contentType }}
          </a>
        </li>
      </ul>
    </div>
    <div class="contentboxcontainer">
      <div class="contentbox" v-for="(x, index) in blogs" :key="index" v-show='($store.state.PageState == "blogView") && ((x.contentType == $store.state.contentTypeUnderView) || ($store.state.contentTypeUnderView == "All"))'>
        <MyContent v-bind:contentIndex="index" v-bind:blogI="x"/>
      </div>
      <div class="post" v-show='($store.state.PageState == "contentView")'>
        <MyMdRenderer :source='blogUnderView.content' v-if="blogUnderView"/>
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

<style lang="scss" scoped>

.myblog {
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 90%;
  padding-top: 10px;
  
  .content-bookmark {
    padding: 2% 2% 2% 1%;
    margin: 0 1% auto auto;

    ul {
      list-style-type:none;
      justify-content: start;
      margin: 0;
      padding: 0;
      li{
        padding: 1px 30px 1px 30px;
        border-radius: 5px;
        border-image-slice: 1;
        border-style: solid;
        border-color: #00000000;
        box-shadow: 1px 1px 1px rgb(0,0,0 / 21%);
      }

    }
  }
  .contentboxcontainer {
    display: inherit;
    width: 100%;
    height:100%;
  }
  .contentbox {
    max-width: 200px;
    max-height: 200px;
  }
}

.hline {
  display: inline-block;
  border-top: 1px solid;
  height: 1px;
  width: 100%;
}
.vline {
  display: inline-block;
  border-right: 1px solid;
  margin-right: 5px;
  margin-left: 5px;
  height: 100%;
}
</style>
