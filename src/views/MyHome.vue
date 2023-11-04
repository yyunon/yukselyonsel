<template>
  <div class="justify-center md:h-full w-full dark:bg-slate-800">
    <div class="relative md:min-h-full w-full dark:bg-slate-800 !scroll-smooth">
      <div class="sm:absolute sm:bottom-20 sm:mb-20 sm:mx-20 sm:text-4xl text-2xl !scroll-smooth">
        <div> 
        hi,
        </div>
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
          I like spending my free time with doing Latin dances and indoor sports. <br>
          <div class="italic">
          If you would like to get to know me better, you can check my 
          <a href="https://www.linkedin.com/in/yukselyonsel" class="underline" target="_blank"> LinkedIn</a>. <br>
          For more information on my personal projects, feel free to scroll through my
          <a href="https://github.com/yyunon" class="underline" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
      <button class="invisible md:visible" @click="scrollToMe">
        <div class="sm:absolute sm:bottom-10 pt-10 w-full flex items-center justify-center">
          <svg class="animate-bounce w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
          </svg>
        </div>
      </button>
    </div>
    <div class="md:h-full w-full relative !scroll-smooth sm:px-20 sm:pt-10 dark:text-white dark:bg-slate-800">
      <h1 class="reveal dark:text-white dark:bg-slate-800" style="--animation-delay: 1;" ref="me">Experiences</h1>
      <div class="flex flex-wrap justify-evenly dark:text-white dark:bg-slate-800">
        <MyExperience class="reveal" style="--animation-delay: 2;" animationDelay="1" logo="/assets/kpn.png" title="Software Engineer" info="2022-present, Netherlands"/>
        <MyExperience class="reveal" style="--animation-delay: 3;" animationDelay="2" logo="/assets/synerscope.png" title="Software Engineer" info="2021-2022, Netherlands"/>
        <MyExperience class="reveal" style="--animation-delay: 4;" animationDelay="3" logo="/assets/geosignum.jpeg" title="Software Engineer" info="2019-2020, Netherlands"/>
        <MyExperience class="reveal" style="--animation-delay: 5;" animationDelay="4" logo="/assets/roketsan.png" title="Electrical Engineer Intern" info="Summer 2018, Turkey"/>
        <MyExperience class="reveal" style="--animation-delay: 6;" animationDelay="5" logo="/assets/vodafone.png" title="Software Engineer Intern" info="Summer 2017, Germany"/>
      </div>
      <h1 class="reveal mt-10 dark:text-white dark:bg-slate-800" style="--animation-delay: 7;">Education</h1>
      <div class="flex flex-wrap flex-grow justify-evenly sm:w-1/3 dark:text-white dark:bg-slate-800">
        <MyExperience class="reveal" style="--animation-delay: 8;" animationDelay="1" logo="/assets/tudelft.png" title="MSc. Computer Engineering" info="2019-2021, Netherlands"/>
        <MyExperience class="reveal" style="--animation-delay: 9;" animationDelay="2" logo="/assets/metu.png" title="BSc. Electrical and Electronics Engineering" info="2014-2019, Turkey"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyExperience from '../components/MyExperience.vue';
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
        //console.log("windowheight " + windowHeight);
        //console.log("reveal " + revealTop);
        //console.log("scroll pos " + window.scrollY);
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
    MyExperience
  },
  watch: {
  }
};
</script>

<style lang="scss" scoped>

  .reveal {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform .2s ease-out;
  }

.reveal.active {
  transform: translateX(0%);
  opacity: 1;
}
</style>
