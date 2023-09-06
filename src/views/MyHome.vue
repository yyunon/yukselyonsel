<template>
  <div class="inline-flex flex-col mx-5 w-full md:m-auto md:flex-wrap md:items-start sm:text-2xl text-xl">
    <MyWelcome />
  </div>
</template>

<script>
import MyWelcome from './MyWelcome.vue';

// @ is an alias to /src

export default {
  name: "MyHome",
  components: { MyWelcome },
};
</script>