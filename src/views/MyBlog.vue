<template>
    <div class="blobintro" v-show='!blogView'>
      <p>Welcome to the workspace that I host my writings. Please don't my mind typos that much as this is my first intro to posting my writings...</p>
    </div>
  <div class="myblog">
    <div class="content-bookmark">
      <font-awesome-icon icon="fa-solid fa-bars" />
      <lister :items="contentTypes"/>
    </div>
    <div class="content-container">
      <div class="container" v-show="!blogView">
        <a href="#" class="click-div" @click="changeState('../assets/markdowns/masterideas/choosing_masters.md')">
          <div class="content">
            <img class="logo" src="../assets/markdowns/masterideas/tudelftlogo.jpg">
            <h3> My journey in Netherlands </h3>
          </div>
        </a>
      </div>
      <div class="post" v-show="blogView">
        <MyMdRenderer :source="this.markdownContent"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyMdRenderer from "../components/MyMdRenderer.vue"
import {masterExperience} from "../assets/markdowns/masterideas/choosing_masters.md" 
import events from "../utils/api.js"

export default {
  name: "MyBlog",
  data() {
    return {
      blogView: false,
      postId: "",
      markdownContent: '',
      contentTypes: [],
    }
  },
  methods: {
    changeState(postId) {
      this.blogView = !this.blogView;
      this.postId = postId;
      this.markdownContent = masterExperience;
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
        const response = await events.get("contentTypes")
        this.contentTypes = response.data;
        console.log(this.contentTypes)
      } catch(err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getContentTypes();
  },
  mounted: function() {
  },
  components: {
    MyMdRenderer,
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
}
</style>
