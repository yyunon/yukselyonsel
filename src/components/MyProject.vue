<template>
  <div class="single-project" :style="cssProps" v-on:click="toggleSection">
    <h5 class="h5">
      {{ projectData.header }} 
      <div>
        <span class="icon-container" v-for="(item, i) in projectData.icons" :key="i">
          <img id="devicon" v-bind:src='item.url' v-bind:alt="item.name">
        </span>
      </div>
    </h5>
    <div class="project-container">
      <div class="sectionHeader">
        {{ summary }}
        <span class="toggleIcon" id="toggleIcon" style="text-" v-show="!showSection">{{toggleIcon}}</span> 
          <span class="sectionBody" v-show="showSection">
            {{ fullredux }}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
  .single-project {
    text-align: center;
    cursor: pointer;
    animation: slide-in-opaque;
    animation-delay: calc(var(--animation-delay) * .2s);
    animation-duration: .3s;
    animation-fill-mode: backwards;

    .h5 {
      .icon-container {
        display: inline-block;
      }
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
          animation-name: slide-dir;
        }

        .slide-leave-active {
          animation-name: slide-dir;
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
