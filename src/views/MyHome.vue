<template>
  <div class="justify-center h-full w-full dark:bg-slate-800 px-10 md:px-0 overflow-wrap">
    <div class="min-h-full w-full dark:bg-slate-800 ">
      <div class="absolute md:bottom-20 md:mb-20 md:mx-20 md:text-4xl text-xl">
        <div> 
        hi,
        </div>
        <div>
        I am <span class="myname sm:text-7xl text-2xl">Y&uuml;ksel</span>, 
        </div>
        <div>
        a software engineer.
        </div>
        <div class="sm:text-xl text-l text-gray-500">
          I spend majority of my time creating software that pipelines data, <br>
          and the most of my free time writing software on new frameworks/frameworks that are new to me. <br>
          I am currently working at KPN which is the leading telecommunications and IT provider, <br>
          a market leader in Netherlands. <br>
          I like spending my free time with doing Latin dances and indoor sports. <br>
          <div class="italic">
          If you would like to get to know me better, you can check my 
          <a href="https://www.linkedin.com/in/yukselyonsel" class="underline" target="_blank"> LinkedIn</a>. <br>
          For more information on my personal projects, feel free to scroll through my
          <a href="https://github.com/yyunon" class="underline" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'flowbite';

export default {
  name: "MyHome",
  data() {
    return {
    }
  },
  methods: {
    revealElement() {
      var reveals = this.$el.querySelectorAll(".reveal");
      for(var i=0; i< reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    },
    scrollToMe() {
      this.$refs.me.scrollIntoView({block: "start", behaviour: "smooth"});
    }
  },
  mounted() {
    window.addEventListener('scroll', this.revealElement);
  },
  unmounted() {
    window.removeEventListener('scroll', this.revealElement);
  },
  components: {
  },
  watch: {
  }
};
</script>

<style lang="scss" scoped>

  .reveal {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform .5s ease-out;
  }

.reveal.active {
  transform: translateX(0%);
  opacity: 1;
}
</style>
