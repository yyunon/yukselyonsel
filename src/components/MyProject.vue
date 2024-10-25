
<template>
  <button :id="projectData.name" class="blurme single-project relative p-0 shadow align-center width-100 height-100 focus:ring-4 rounded-md" :style="cssProps">
    <div class="p-5">
      <div class="absolute bg-orange-100 dark:bg-red-500 top-2 left-2 px-1 py-.5" >
        {{ projectData.label }}
      </div>
      <h5 class="h5 my-4 text-xl">
        {{ projectData.header }} 
      </h5>
      <div>
        <span class="icon-container" v-for="(item, i) in projectData.icons" :key="i">
          <img class="inline-block rounded-full w-8 h-8" v-bind:src="item.url" v-bind:title="item.name">
        </span>
      </div>
      <div class="mt-4 text-s">
      {{ projectData.sectionSummary }}
      </div>
    </div>
  </button>

  <div tabindex="-1" v-if="showSection" class="fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative mx-auto text-xxl top-1/4 p-4 w-full max-w-6xl max-h-full z-0">
      <div :id="'modal_' + projectData.name"  class="inline-flex flex-col p-10 bg-white rounded-lg shadow dark:bg-gray-700 z-0" >
        <div class="bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="absolute bg-orange-100 dark:bg-red-500 top-2 left-2 px-1 py-.5" >
            {{ projectData.label }}
          </div>
          <button class="absolute top-2 right-2 justify-center items-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 mx-auto dark:hover:bg-gray-600 dark:hover:text-white" v-on:click="toggleSection">
              <svg class="relative w-5 h-5 justify-center align-center m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="h5 my-5">
          {{ projectData.header }} 
          <div>
            <span class="icon-container" v-for="(item, i) in projectData.icons" :key="i">
              <img class="inline-block rounded-full w-8 h-8" v-bind:src="item.url" v-bind:title="item.name">
            </span>
          </div>
        </div>
        <div class="sectionHeader">
          {{ projectData.sectionSummary }}
          <span class="sectionBody">
            <MyDynComp :content="projectData.sectionBody"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import MyDynComp from './MyDynComp.vue';
  // eslint-disable-next-line
  import { onMounted, onBeforeUnmount, computed, ref, toRef} from 'vue';
  const props= defineProps(['animationDelay','projectData', 'summaryLength']);
  const propRefs = toRef(props, 'projectData');
  const cardName = propRefs.value.name;
  const modalName = 'modal_' + cardName;
  const showSection = ref(false);
  const toggleSection = () => {
      showSection.value = !showSection.value;
      const blurits = document.querySelectorAll(".blurme");
      if(showSection.value) {
        blurits.forEach((blurit) => {
          blurit.style.filter = "blur(7px)";
        });
      } else {
        blurits.forEach((blurit) => {
          blurit.style.filter = "none";
        });
      }
  };

  document.getElementById("")

  // eslint-disable-next-line
  const handleClick = (event) => {
    console.log(event.target.parentNode);
    const card = document.getElementById(cardName);
    const modal = document.getElementById(modalName);
    const blurits = document.querySelectorAll(".blurme");
    console.log(card);
    console.log(modal);
    //if(modal && !modal.contains(event.target.parentNode.id)){
    if(card && card.contains(event.target.parentNode)){
      showSection.value = true;
      blurits.forEach((blurit) => {
        blurit.style.filter = "blur(7px) grayscale(1)";
      });
    } else if(modal && !modal.contains(event.target.parentNode)){
      showSection.value = false;
      blurits.forEach((blurit) => {
        blurit.style.filter = "none";
      });

    }
  };

  onMounted(()=>{
    document.addEventListener('click', handleClick);
  });

  onBeforeUnmount(()=>{
    document.removeEventListener('click', handleClick);
  });

  const cssProps = computed(() => {
        return {
          '--animation-delay': props.animationDelay
        }
  });

</script>

<style lang="scss">
  .single-project {
    filter: blur(0);
    animation: slide-in-opaque;
    animation-delay: calc(var(--animation-delay) * .2s);
    animation-duration: .3s;
    animation-fill-mode: backwards;

  }
  .single-project:hover {
    //margin: 2px;
    box-shadow: 1px 1px 1px 1px rgba(131, 131, 131, 0.5);
    transition: .4s ease all;
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
