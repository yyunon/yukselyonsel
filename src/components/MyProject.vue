<template>
  <div class="single-project" v-on:click="toggleSection">
    <h5 class="h5">
      {{ projectData.header }} 
      <span class="icon-container" v-for="(item, i) in projectData.icons" :key="i">
        <img id="devicon" v-bind:src='item.url' v-bind:alt="item.name">
      </span>
    </h5>
    <div class="project-container">
      <div class="sectionHeader">
        {{ summary }}
        <span class="toggleIcon" id="toggleIcon" style="text-" v-show="!showSection">{{toggleIcon}}</span> 
        <Transition name="slide">
          <span class="sectionBody" v-show="showSection">
            {{ fullredux }}
          </span>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProject',
  props: ['projectData', 'summaryLength'],
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
  }
}
</script>

<style lang="scss">
  .single-project {
    text-align: center;
    cursor: pointer;
    animation: slide-in .5s;
    animation-fill-mode: backwards;

    .h5 {
      font-size: 20px;
    }
    img{
      max-width : 25px;
      max-height : 25px;
      vertical-align: middle;
    }
    .project-container{
      display: block;
      .sectionHeader {

        .slide-enter-active {
          animation: slide-dir .5s;
        }

        .slide-leave-active {
          animation: slide-dir .5s reverse;
        }

        @keyframes slide-dir {
        }

      }
    }
  }
  .single-project:hover {
    margin: 2px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
    transition: .1s ease all;
  }
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
      opacity: 0.25;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
}
</style>
