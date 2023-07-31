<template>
  <div class="blobintro" v-show='!blogView'>
    <p>Welcome to the workspace that I host my writings. Please don't my mind typos that much as this is my first intro to posting my writings...</p>
  </div>
  <div class="myblog">
    <div class="content-bookmark">
      <font-awesome-icon icon="fa-solid fa-bars" />
      <lister :items="contentTypes"/>
    </div>
    <div class="contentbox" v-for="(x, index) in blogs" :key="index">
      <MyContent v-bind:blogI="x"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyContent from "../components/MyContent.vue"
import events from "../utils/api.js"

export default {
  name: "MyBlog",
  data() {
    return {
      blogView: false,
      postId: "",
      markdownContent: '',
      contentTypes: [],
      blogs: [],
    }
  },
  methods: {
    changeState(postId) {
      this.blogView = !this.blogView;
      this.postId = postId;
    },
    readFile(fileName) {
      var file = new File(fileName);
      console.log(fileName);
      var fileReader = new FileReader();
      fileReader.onload = function(res) {
        this.markdownContent = res.target.result; 
      }
      fileReader.readAsText(file);
      console.log(this.markdownContent);
    },
    async getContentTypes() {
      try {
        const response = await events.get("/markdowns/contentTypes")
        this.contentTypes = response.data;
        console.log(this.contentTypes)
      } catch(err) {
        console.log(err);
      }
    },
    async getBlogs() {
      try {
        const response = await events.get("/markdowns")
        this.blogs = response.data;
        console.log(this.blogs)
      } catch(err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getContentTypes();
    this.getBlogs();
  },
  mounted: function() {
  },
  components: {
    MyContent,
    lister: {
      props: ['items'],
      template: `
        <ul>
          <li v-for="item of items">
            <a href='#'>
              {{ item }}
            </a>
          </li>
        </ul>
      `
    }
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
    border: double 2px;
    border-radius: 15px;
    border-image-slice: 1;
    border-style: solid;
    border-color: #d3d3d3;

    ul {
      list-style-type:none;
      justify-content: start;
      margin: 0;
      padding: 0;
      li:hover {
        background-colour: #cc9999;
      }
      a {
        color:inherit;
        text: inherit;
        text-decoration: none;
      }

    }
  }

  .contentbox {
    width: 100%;
    height:100%;
  }
}
</style>
