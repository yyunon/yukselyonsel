<template>
  <div class="absolute flex flex-col md:ml-20 md:pt-20 justify-center text-xl">
    <div class="container flex p-0">
      <div class="myintro" v-for="cs in contentStructs" v-bind:key="cs.contentHtml">
          <MyIntroduction v-bind:content="cs.contentHtml" v-bind:style="cs.contentStyle" :key="cs.contentTrigger"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyIntroduction from '@/components/MyIntroduction.vue';

export default {
  name: "MyWelcome",
  data() {
    return {
      typeWriter:null,
      typeWriters: [],
      contents: [`
        <div class="sm:text-4xl text-2xl">
          <div> 
          hi <span class="inline-block animate-waving-hand origin-bottom">👋🏻</span>,
          </div>
          <br>
          <div>
          I am <span class="myname sm:text-7xl text-4xl">Y&uuml;ksel</span>, 
          </div>
          <div>
          a software engineer.
          </div>
          <div class="sm:text-xl text-l text-gray-500">
            I spend majority of my time creating software that pipelines data, <br>
            and the most of my free time writing software on new frameworks/frameworks that are new to me. <br>
            I am currently working at KPN which is the leading telecommunications and IT provider, <br>
            a market leader in Netherlands. <br>
            I like spending my free time with doing Latin dances and indoor sports.
          </div>
        </div>
        `],
      contentStruct: {
        contentHtml: ``,
        contentTrigger: 0,
        contentStyle: Object,
      },
      contentStructs : [],
      contentSpeed: 20,
      contentTrigger: 0,
      firstLoad: undefined, 
    }
  },
  methods: {
    forceRender(childIndex, content) {
      let cs = this.contentStructs[childIndex];
      cs.contentHtml = content
      cs.contentTriggers += 1;
    },
    setupTypeWriter(childIndex, content, forceRenderCallback) {
      let cursor= 0;
      let contentSpeed = this.contentSpeed;
      let remainingSpeed = contentSpeed;
      let contentHtml = ``;
      let renderContext = true;
      let speedOffset = 0;

      var type = function() {
        if (content[cursor] === '&' || content[cursor] === '<') {
          renderContext = false;
          speedOffset = contentSpeed - 10;
        } else if (content[cursor] === ';' || content[cursor] === '>') {
          renderContext = true;
          speedOffset = 0;
        }

        contentHtml += content[cursor];
        if (!this.firstLoad) {
          contentHtml = content;
          cursor = content.length - 1
        }
        if (renderContext) {
          forceRenderCallback(childIndex, contentHtml);
        }

        if (cursor === content.length - 1) {
          return Promise.resolve();
        }

        remainingSpeed = contentSpeed - speedOffset;
        cursor += 1;
        setTimeout(type, remainingSpeed)

    };

    return {
      type: type
    };
    },
  },
  async created() {
    this.contents.forEach(async function (content, i) {
      this.contentStructs.push({contentHtml: ``, contentTrigger: 0, contentStyle: Object});
      this.typeWriters.push(this.setupTypeWriter(i, content, this.forceRender));
    }, this);

    for(let i = 0; i<this.typeWriters.length; i++ ) {
      await this.typeWriters[i].type();
    }
  },
  components: {
    MyIntroduction,
  },
  watch: {
    $route(to, from) {
      this.firstLoad = from.name == null ? true : false
    },
  }
};
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:absolute;
  .container{
    width: fit-content; 
    height: fit-content; 
    .myintro {
    display: flex;
    }
  }

}
</style>
