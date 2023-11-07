<template>
  <div class="content-container flex flex-col w-52 text-center items-center justify-center" :style="cssProps">
    <div class="p-5 flex flex-col justify-center">
      <div class="p-auto">
        <img class="object-scale-down justify-center m-auto h-40 w-auto" :src="logo">
      </div>
      <div class="font-semibold italic mt-5">{{ title }}</div>
      <div class="font-normal mt-1">{{ info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyExperience',
  props: ['animationDelay', 'title','company', 'logo', 'extraStyle', 'info'],
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

</style>
