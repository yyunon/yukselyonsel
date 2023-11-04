<template>
  <div class="flex flex-col md:my-37 px-5 text-center w-full scroll-smooth">
    <div class="flex flex-col md:my-20 text-left w-full">
      <div class="w-full align-center italic">
        <p>
          Below, you can see the chosen projects of my mine. I choose them due to their scope and duration.
          Please check my 
          <a href="https://github.com/yyunon" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Github
          </a>
          for the rest of my contributions and projects!
        </p>
      </div>
      <div class="flex flex-col justify-center">
        <MyProject animationDelay="1" v-bind:projectData="fpgaProject" v-bind:summaryLength="30"/>
        <MyProject animationDelay="2" v-bind:projectData="yukselyonseldotcomProject" v-bind:summaryLength="30"/>
      </div>
    </div>
    <div class="flex flex-col m-5 text-left w-full">
      <div class="w-full align-center italic">
        <p>
          Some of my archived and small projects or experiments are below.
        </p>
      </div>
      <div class="flex flex-col justify-center">
        <MyProject animationDelay="3" v-bind:projectData="deepImagePrior" v-bind:summaryLength="30"/>
        <MyProject animationDelay="4" v-bind:projectData="archLudwig" v-bind:summaryLength="30"/>
        <MyProject animationDelay="5" v-bind:projectData="yim" v-bind:summaryLength="30"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyProject from "../components/MyProject.vue"
import {iconFactory} from "../utils/iconFactory.js"

export default {
  name: "MyProjects",
  methods: {
    toggleSection() {
      this.showSection = !this.showSection
    }
  },
  data() {
    return {
    }
  },
  components: {
    MyProject,
  },
  computed: {
      fpgaProject() {
        return {
          header: "Exploring the limits of query pushdown for SQL Acceleration on FPGAs",
          sectionSummary: 
            `
            This project is done in ABS group in TU Delft, mainly focusing on accelerating big data applications on heterogeneous, homogeneous and future-proof systems.
            `,
          sectionBody: 
            `
              <p>FPGAs (Field Programmable Gate Arrays) are integrated circuits that are reconfigurable and programmed via hardware description languages. 
                They provide many benefits due to them being highly reconfigurable and can be configured to be application specific. 
                The idea of my research was to focus on accelering database queries on FPGA's while abstracting the technology from the big data framework that we are using.<p>
              <p>
                You can always read my thesis 
                <a href="https://repository.tudelft.nl/islandora/object/uuid%3A85d80b28-f1ed-4e52-b233-1c20a7ba376b" class="text-xl" target="_blank">here</a>
              </p>
              <div>
                <p class="text-start">
                In this project, I have worked on several different repositories:
                </p>

                <div class="flex flex-col">

                  <div class="flex flex-row my-2">
                    <a href="https://github.com/yyunon/abs-tpc-accelerated" class="" target="_blank">
                      <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
                    </a>
                    <div class="text-start w-1/2 mx-2">
                    <a href="https://github.com/yyunon/abs-tpc-accelerated" class="" target="_blank">
                      <span>
                        yyunon
                      </span>
                      <span class="text-gray-500">
                        /
                      </span>
                      <span>
                        abs-tpc-accelerated
                      </span>
                    </a>
                      <p class="text-xs text-gray-700">
                        This is the software component that is incorporated with my thesis. It consists of a multithreaded scheduler that schedules tasks to FPGA compute. Also, it has seamless integration with Apache Spark.
                      </p>
                    </div>
                  </div>

                  <div class="flex my-2">
                    <a href="https://github.com/yyunon/tpch1" class="" target="_blank">
                      <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
                    </a>
                    <div class="text-start w-1/2 mx-2">
                    <a href="https://github.com/yyunon/tpch1" class="" target="_blank">
                      <span>
                        yyunon
                      </span>
                      <span class="text-gray-500">
                        /
                      </span>
                      <span>
                        tpch1
                      </span>
                    </a>
                      <p class="text-xs text-gray-700">
                        Hardware design of TPC-H Query 1, for AWS F1 instances. It implements a query pushdown logic.
                      </p>
                    </div>
                  </div>

                  <div class="flex my-2">
                    <a href="https://github.com/yyunon/tpch6" class="" target="_blank">
                      <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
                    </a>
                    <div class="text-start w-1/2 mx-2">
                    <a href="https://github.com/yyunon/tpch6" class="" target="_blank">
                      <span>
                        yyunon
                      </span>
                      <span class="text-gray-500">
                        /
                      </span>
                      <span>
                        tpch6
                      </span>
                    </a>
                      <p class="text-xs text-gray-700">
                        Hardware design of TPC-H Query 6, for AWS F1 instances. It implements a query pushdown logic.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            `,
          icons: [iconFactory.cpp, iconFactory.cmake, iconFactory.c, iconFactory.amazonwebservices, iconFactory.python]
        }
      },
      yukselyonseldotcomProject() {
        return {
          header: "yukselyonsel.com",
          sectionSummary:
            `
              The website that you are now clicking on is my yet another side project to mingle with the UI world. 
            `,
          sectionBody: 
            `This website is also one of my projects to play with frontend components and get lost in UI/UX design. The frontend is written with Vue3. Moreover, I do run a server on google cloud and the backend is completely written in Rust.
            `,
          icons: [iconFactory.vuejs, iconFactory.javascript, iconFactory.rust, iconFactory.googlecloud]
        }
      },
      deepImagePrior() {
        return {
          header: "Deep Image Priors",
          sectionSummary:
            `
            I was one of the three people who investigated the reproduction of of paper on deep image priors.
            `,
          sectionBody: 
            `
            <div class="flex my-2">
              <a href="https://github.com/yyunon/reproducibility-project-group-71" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
              <a href="https://github.com/yyunon/reproducibility-project-group-71" class="" target="_blank">
                <span>
                  yyunon
                </span>
                <span class="text-gray-500">
                  /
                </span>
                <span>
                  reproducibility-project-group-71
                </span>
              </a>
                <p class="text-xs text-gray-700">
                  This is the repository containing the reproducibility project of deep learning course
                </p>
              </div>
            </div>
            We have also written a blog post on how to reproduce it. Please click 
            <a href="https://github.com/yyunon/reproducibility-project-group-71/blob/master/Blog.ipynb" class="underline" target="_blank"><span>here</span></a> for more information about the blog post.
            This post is later published in 
            <a href="https://reproducedpapers.org" class="underline" target="_blank">
              <span>
            https://reproducedpapers.org
              </span>
            </a> 
            `,
          icons: [iconFactory.python]
        }
      },
      archLudwig() {
        return {
          header: "Architectural Analysis of Ludwig",
          sectionSummary:
            `
            In the scope of this project, I have worked with several of my classmates to analyse and improve the architecture of Ludwig. we have also produced several blog posts which
            are published in the course website.
            `,
          sectionBody: 
            `Please click 
            <a href="https://desosa.nl/projects/ludwig/" class="underline" target="_blank"><span>here</span></a> for more information about it.
            `,
          icons: [iconFactory.python]
        }
      },
      yim() {
        return {
          header: "A recreational editor,  Yim",
          sectionSummary:
            `
            I wanted to experiment with termios and shell manipulation in Rust. At that time, implementing an editor was fun idea to play with Rust. 
            `,
          sectionBody: 
            `Please click 
            <a href="https://github.com/yyunon/yim" class="underline" target="_blank"><span>here</span></a> for more information about it.
            `,
          icons: [iconFactory.rust]
        }
      },
  }
};
</script>

<style lang="scss" scoped>
  .reveal {
    animation: slide-in-opaque;
    animation-delay: calc(.1s * var(--animation-delay));
    animation-duration: .3s;
    animation-fill-mode: backwards;
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
