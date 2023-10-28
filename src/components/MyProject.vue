<template>
  <div class="single-project p-5 font-xs" :style="cssProps" v-on:click="toggleSection">
    <h5 class="h5">
      {{ projectData.header }} 
      <div>
        <span class="icon-container" v-for="(item, i) in projectData.icons" :key="i">
          <img class="inline-block rounded-full w-8 h-8" v-bind:src="item.url" v-bind:title="item.name">
        </span>
      </div>
    </h5>
    <div class="project-container">
      <div class="sectionHeader">
        {{ projectData.sectionSummary }}
        <span class="toggleIcon" id="toggleIcon" style="text-" v-show="!showSection">{{toggleIcon}}</span> 
          <span class="sectionBody" v-show="showSection">
            <MyDynComp :content="projectData.sectionBody"/>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyDynComp from './MyDynComp.vue';

export default {
  name: 'MyProject',
  props: ['animationDelay','projectData', 'summaryLength'],
  data() {
    return {
      img_degree: 0,
      showSection: false,
      toggleIcon: '...',
      summary: '',
      fullredux: '',
    }
  },
  methods: {
    toggleSection() {
      this.showSection = !this.showSection;
    },
    rotate() {
      this.img_degree += 360;
    },
    chunkString(str) {
      return str.split(' ');
    }
  },
  created() {
    const content = this.chunkString(this.projectData.sectionBody, this.summaryLength);
    this.summary = content.slice(0, this.summaryLength).join(' ');
    this.fullredux = content.slice(this.summaryLength + 1,content.length).join(' ');
  },
  computed: {
      cssProps() {
        return {
          '--animation-delay': this.animationDelay
        }
      }
  },
  components: {
    MyDynComp
  }
}
</script>

<style lang="scss">
  .single-project {
    text-align: center;
    animation: slide-in-opaque;
    animation-delay: calc(var(--animation-delay) * .2s);
    animation-duration: .3s;
    animation-fill-mode: backwards;

    .h5 {
      font-size: 20px;
    }
  }
  .single-project:hover {
    //margin: 2px;
    box-shadow: 3px 3px 3px rgba(131, 131, 131, 0.5);
    transition: .1s ease all;
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
