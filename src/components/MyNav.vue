<template>
  <div class="max-w-screen mx-auto">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center sm:justify-between pt-4 pl-4 sm:px-4 sm:mx-4 z-1
                  ">
      <MyHeadline class="hidden md:block"/>

      <div class="hidden md:flex w-full justify-between items-center font-light md:text-xl md:w-auto md:order-1" id="navbar-hamburger">
        <ul class="flex flex-col md:flex-row md:p-0 z-auto">
          <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" aria-current="page" :to="{name: 'home'}">About.</router-link></li>
          <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" :to="{name: 'projects'}">Projects.</router-link></li>
          <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" :to="{name: 'blog'}">Blog.</router-link></li>
          <li><router-link class="hover:bg-gray-100 lowercase mx-4 transition-colors duration-300" :to="{name: 'contactme'}">Contact.</router-link></li>
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
      }
    },
    components: {
      MyHeadline
    }
  };
</script>
<style>
</style>