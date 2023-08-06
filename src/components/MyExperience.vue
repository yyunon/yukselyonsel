<template>
  <div class="work-box" :style="cssProps">
    <div class="companyLogo">
      <img :src="logo">
    </div>
    <div class="title">{{ title }} {{ company }}</div>
  </div>
</template>

<script>
export default {
  name: 'MyExperience',
  props: ['animationDelay', 'title','company', 'logo', 'extraStyle'],
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
    rotate() {
      this.img_degree += 360;
    },
  },
  computed: {
      cssProps() {
        return {
          '--animation-delay': this.animationDelay,
          '--extra-style': this.extraStyle
        }
      }
  }
}
</script>

<style lang="scss">
  .work-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    height:auto;
    padding:10px;
    margin:0;

    .title {
      text-align: center;
      vertical-align: middle;
      margin: auto;
    }
    .companyLogo {
      background-color: var(--extra-style);
      width: 100%;
      height: auto;
    }
  }
  .work-box:hover {
    margin: 2px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
    border-radius: 15px;
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
