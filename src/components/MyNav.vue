<template>
  <div class="md:fixed sm:w-full top-0 z-50 w-full">
    <nav class="border-gray-200 bg-white dark:bg-gray-800">
      <div class="flex flex-wrap items-center sm:justify-between pt-4 pl-4 sm:px-4 sm:mx-4 z-1 dark:text-white
                  ">
        <MyHeadline class="hidden md:block"/>

        <div class="hidden md:flex w-full justify-between items-center font-light md:text-xl md:w-auto md:order-1 divide-x" id="navbar-hamburger">
          <ul class="flex flex-col md:flex-row md:p-0 z-auto mx-2">
            <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" aria-current="page" :to="{name: 'home'}">About.</router-link></li>
            <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" :to="{name: 'projects'}">Projects.</router-link></li>
            <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" :to="{name: 'blog'}">Blog.</router-link></li>
            <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" :to="{name: 'contactme'}">Contact.</router-link></li>
          </ul> 
          <ul class="flex flex-col md:flex-row md:p-0 z-auto mx-2">
            <li class="mx-2">
              <a href="https://github.com/yyunon" class="mx-0 mb-0" target="_blank">
                <span class="sr-only">Github</span>
                <svg class="w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" height="md:1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-400">
                  GitHub
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </a>
            </li>
            <li class="mx-2">
              <a href="https://www.linkedin.com/in/yukselyonsel" class="mx-0 my-0" target="_blank">
                <span class="sr-only">Linkedin</span>
                <svg class="w-4 h-4 md:w-8 md:h-8 fill-linkedin" xmlns="http://www.w3.org/2000/svg" height="md:1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path fill="#0077b5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
                <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-400">
                  Linkedin
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </a>
            </li>
            <li class="mx-2">
              <button
                ref="theme_toggle"
                type="button"
                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                @click="toggleDarkMode"
              >
                <svg
                  ref="theme_toggle_dark_icon"
                  class="w-4 h-4 md:w-8 md:h-8 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  ></path>
                </svg>
                <svg
                  ref="theme_toggle_light_icon"
                  class="w-4 h-4 md:w-8 md:h-8 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul> 
        </div>

        <div class="sm:hidden z-50 fixed bottom-4 w-11/12 h-12 bg-white border border-gray-200 rounded-full mx-auto">
            <div class="grid h-full grid-cols-4 mx-auto font-medium">
                <router-link class="inline-flex items-center justify-center" aria-current="page" :to="{name: 'home'}">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span class="sr-only text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                </router-link>
                <router-link class="inline-flex items-center justify-center" :to="{name: 'blog'}">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/>
                  </svg>
                    <span class="sr-only text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Posts</span>
                </router-link>
                <router-link class="inline-flex items-center justify-center" :to="{name: 'projects'}">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 22">
                      <path d="M18.417 6.75v-.947c-.124-1.511-4.042-1.52-4.148-.001h-.013v.948c-.034 1.598 4.214 1.601 4.161 0zm-2.067-1.366c.723 0 1.311.253 1.311.564s-.588.564-1.311.564c-.724 0-1.311-.253-1.311-.564s.587-.564 1.311-.564zm-2.286 3.771v-.947c-.123-1.511-4.042-1.52-4.148-.001h-.013v.948c-.034 1.598 4.213 1.601 4.161 0zm-2.068-.238c-.723 0-1.311-.253-1.311-.564 0-.312.588-.564 1.311-.564.724 0 1.311.253 1.311.564 0 .312-.587.564-1.311.564zm2.068-4.446v-.946c-.124-1.512-4.042-1.52-4.148-.001h-.013v.947c-.034 1.598 4.214 1.602 4.161 0zm-2.067-1.366c.723 0 1.311.253 1.311.564s-.588.564-1.311.564c-.724 0-1.311-.253-1.311-.564s.587-.564 1.311-.564zm.003-3.105l-11 6 .009.019-.009-.005v12.118l11 5.868 11-5.869v-12.055l-11-6.076zm-.003 1.141l9.917 5.458-9.896 5.385-9.903-5.448 9.882-5.395zm9.003 11.63l-8 4.268v-3.039l8-4.353v3.124zm-10 4.268l-8-4.268v-3.172l8 4.401v3.039zm-8-3.228l8 4.268v2.921l-8-4.268v-2.921zm10 4.268l8-4.268v2.921l-8 4.268v-2.921zm-7.447-12.277h-.013v.948c-.034 1.598 4.213 1.601 4.161 0v-.947c-.123-1.511-4.042-1.519-4.148-.001zm2.08.71c-.723 0-1.311-.253-1.311-.564s.588-.565 1.311-.565c.724 0 1.311.253 1.311.564s-.588.565-1.311.565z"/>
                    </svg>
                    <span class="sr-only text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Projects</span>
                </router-link>
                <router-link class="inline-flex items-center justify-center " :to="{name: 'contactme'}">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <span class="sr-only text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Contact</span>
                </router-link>
            </div>
        </div>
      </div>
    <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" >
    </nav>
  </div>
</template>

<script>
  import MyHeadline from './MyHeadline.vue';
  export default {
    name: "mynav-bar",
    data() {
      return {
        scrollPosition: null,
        mobileNav:false,
        windowWidth:null,
      };
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
      toggleDarkMode() {
        var themeToggleDarkIcon = this.$refs.theme_toggle_dark_icon;
        var themeToggleLightIcon = this.$refs.theme_toggle_light_icon;
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.body.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.body.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.body.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
      }
    },
    mounted() {
        var themeToggleDarkIcon = this.$refs.theme_toggle_dark_icon;
        var themeToggleLightIcon = this.$refs.theme_toggle_light_icon;

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }
    },
    components: {
      MyHeadline
    }
  };
</script>
<style>
</style>