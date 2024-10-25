<template>
  <div class="flex flex-col md:my-37 px-5 text-center w-full scroll-smooth z-1">
    <div class="flex flex-col md:my-20 w-full">
      <div class="blurme w-full align-center italic my-10">
        <p class="reveal text-left">
          Below, you can see the chosen projects of my mine. I choose them due to their scope and duration.
          Please check my 
          <a href="https://github.com/yyunon" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">
            Github
          </a>
          for the rest of my contributions and projects!
        </p>
      </div>
      <div class="grid md:grid-cols-3 justify-center items-center gap-5">
        <MyProject animationDelay="0" v-bind:projectData="geckodriver" v-bind:summaryLength="30"/>
        <MyProject animationDelay="1" v-bind:projectData="fpgaProject" v-bind:summaryLength="30"/>
        <MyProject animationDelay="2" v-bind:projectData="yukselyonseldotcomProject" v-bind:summaryLength="30"/>
        <MyProject animationDelay="3" v-bind:projectData="cloudscheduler" v-bind:summaryLength="30"/>
        <MyProject animationDelay="4" v-bind:projectData="thuisscraper" v-bind:summaryLength="30"/>
      </div>
    </div>
    <div class="flex flex-col md:my-10 w-full">
      <div class="blurme w-full align-center italic my-10">
        <p class="reveal text-left">
          Some of my archived and small projects or experiments are below.
        </p>
      </div>
      <div class="grid md:grid-cols-3 justify-center items-center gap-5">
        <MyProject animationDelay="5" v-bind:projectData="deepImagePrior" v-bind:summaryLength="30"/>
        <MyProject animationDelay="6" v-bind:projectData="archLudwig" v-bind:summaryLength="30"/>
        <MyProject animationDelay="7" v-bind:projectData="yim" v-bind:summaryLength="30"/>
        <MyProject animationDelay="8" v-bind:projectData="whatscraper" v-bind:summaryLength="30"/>
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
          name:"fpgaProject",
          header: "Exploring the limits of query pushdown for SQL Acceleration on FPGAs",
          sectionSummary: 
            `
            My research project to accelerate workloads on heterogeneous platforms
            `,
          sectionBody: 
            `
              <p>
                This project is done in ABS group in TU Delft, mainly focusing on accelerating big data applications on heterogeneous, homogeneous and future-proof systems.
                FPGAs (Field Programmable Gate Arrays) are integrated circuits that are reconfigurable and programmed via hardware description languages. 
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
          icons: [iconFactory.cpp, iconFactory.cmake, iconFactory.c, iconFactory.amazonwebservices, iconFactory.java]
        }
      },
      yukselyonseldotcomProject() {
        return {
          name:"yukselyonseldotcomProject",
          header: "yukselyonsel.com",
          sectionSummary:
            `
            A UI project
            `,
          sectionBody: 
            `
            The website that you are now clicking on is my yet another side project to mingle with the UI world. 
            This website is also one of my projects to play with frontend components and get lost in UI/UX design. The frontend is written with Vue3. Moreover, I do run a server on google cloud and the backend is completely written in Rust.
            <div class="flex my-2">
              <a href="https://github.com/yyunon/yukselyonsel" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
                <a href="https://github.com/yyunon/yukselyonsel" class="" target="_blank">
                  <span>
                    yyunon
                  </span>
                  <span class="text-gray-500">
                    /
                  </span>
                  <span>
                    yukselyonsel
                  </span>
                </a>
                <p class="text-xs text-gray-700">
                  My webpage
                </p>
              </div>
            </div>
            `,
          icons: [iconFactory.vuejs, iconFactory.javascript, iconFactory.rust, iconFactory.googlecloud]
        }
      },
      deepImagePrior() {
        return {
          name:"deepImagePrior",
          header: "Deep Image Priors",
          label: "ARCHIVE",
          sectionSummary:
            `
            Reproducing deep image priors with PyTorch
            `,
          sectionBody: 
            `
            I was one of the three people who investigated the reproduction of of paper on deep image priors.
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
          name: "archLudwig",
          header: "Architectural Analysis of Ludwig",
          label: "ARCHIVE",
          sectionSummary:
            `
            Does Ludwig of Uber have good software architecture?
            `,
          sectionBody: 
            `
            In the scope of this project, I have worked with several of my classmates to analyse and improve the architecture of Ludwig. we have also produced several blog posts which
            are published in the course website.
            Please click 
            <a href="https://desosa.nl/projects/ludwig/" class="underline" target="_blank"><span>here</span></a> for more information about it.
            `,
          icons: [iconFactory.python]
        }
      },
      yim() {
        return {
          name: "yim",
          header: "A recreational editor,  Yim",
          sectionSummary:
            `
            How does one write an terminal editor purely in RUST?
            `,
          sectionBody: 
            `
            I wanted to experiment with termios and shell manipulation in Rust. At that time, implementing an editor was fun idea to play with Rust. 
            <div class="flex my-2">
              <a href="https://github.com/yyunon/yim" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
                <a href="https://github.com/yyunon/yim" class="" target="_blank">
                  <span>
                    yyunon
                  </span>
                  <span class="text-gray-500">
                    /
                  </span>
                  <span>
                    yim
                  </span>
                </a>
                <p class="text-xs text-gray-700">
                  A recreational editor
                </p>
              </div>
            </div>
            `,
          icons: [iconFactory.rust]
        }
      },
      whatscraper() {
        return {
          name: "whatscraper",
          header: "A PoC web scraper,  whatscraper",
          label: "ARCHIVE",
          sectionSummary:
            `
            Have you ever needed proxies for scraping purposes?
            `,
          sectionBody: 
            `
            This is an experiment to make proxied requests to websites and scrape their content for experimental purposes. 
            It is a CLI application. It makes requests to proxies and only retrieves the working ones. Afterwards, it caches them so as to save context for latter runs.
            <div class="flex my-2">
              <a href="https://github.com/yyunon/whatscraper" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
                <a href="https://github.com/yyunon/whatscraper" class="" target="_blank">
                  <span>
                    yyunon
                  </span>
                  <span class="text-gray-500">
                    /
                  </span>
                  <span>
                    whatscraper
                  </span>
                </a>
                <p class="text-xs text-gray-700">
                  A web scraper PoC
                </p>
              </div>
            </div>
            `,
          icons: [iconFactory.java]
        }
      },
      cloudscheduler() {
        return {
          name: "cloudscheduler",
          header: "A cloud scheduler to provision Google Compute Engine in a scheduled way.",
          sectionSummary:
            `
              Save costs by spinning Google VM's up and down.
            `,
          sectionBody: 
            `
            Ever wanted to schedule Google Cloud Compute resources on timely manner and save costs. Here you can find the automated provisioning scripts written in Terraform to achieve that.
            You simply need a machine with google cloud cli, terraform and docker. The idea is that it uses pub/sub topics to provision google vms which uses the code from Google Buckets to deploy Google VMs.
            See below the source code.
            <div class="flex my-2">
              <a href="https://github.com/yyunon/gcp_cloud_scheduler" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
                <a href="https://github.com/yyunon/gcp_cloud_scheduler" class="" target="_blank">
                  <span>
                    yyunon
                  </span>
                  <span class="text-gray-500">
                    /
                  </span>
                  <span>
                    gcp_cloud_scheduler
                  </span>
                </a>
                <p class="text-xs text-gray-700">
                  A google cloud scheduler template
                </p>
              </div>
            </div>
            `,
          icons: [iconFactory.terraform]
        }
      },
      thuisscraper() {
        return {
          name: "thuisscraper",
          header: "Ever wanted to see the restaurants in your area in Amsterdam",
          sectionSummary:
            `
            A basic web scraper with PostgreSQL connector written in Python with FastAPI and asyncio
            `,
          sectionBody: 
            `
            A PoC to get restaurants in Amsterdam to query whatever you like. If you need to find the best thai places by peoples choice in your area code, and develop an app for it. You are looking at the correct place.
            The idea is that it scrapes web in a concurrent manner while keeping in mind of the rate limits. It saves the data in postgres server to be queried. There are 3 endpoints to query data from the server. You already need to have 
            a server for the project.
            Keep in mind that you need to take care of the header of the requests and proxies if you need one(Find the explanation in project readme). The project itself will not work otherwise.
            See below the source code.
            <div class="flex my-2">
              <a href="https://github.com/yyunon/thuisscraper" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
                <a href="https://github.com/yyunon/thuisscraper" class="" target="_blank">
                  <span>
                    yyunon
                  </span>
                  <span class="text-gray-500">
                    /
                  </span>
                  <span>
                    thuisscraper
                  </span>
                </a>
                <p class="text-xs text-gray-700">
                    A web server that can get restaurants in Amsterdam 
                </p>
              </div>
            </div>
            `,
          icons: [iconFactory.python]
        }
      },
      geckodriver() {
        return {
          name: "geckodriver",
          header: "A geckodriver wrapper written in native rust (WIP, on active development!)",
          label: "ACTIVE",
          sectionSummary:
            `
            An effort to make undetected webdriver purely in RUST
            `,
          sectionBody: 
            `
            A naive webdriver implementation that will get you page you want both asyncronously and syncronously. Right now, you can only retrieve your page and save screenshot, yet the implementation is to come.
            See below the source code and my aimed architecture with example projects.
            <div class="flex my-2">
              <a href="https://github.com/yyunon/geck-in-rs" class="" target="_blank">
                <img src="/assets/pine.png" class="w-8 h-8 md:w-16 md:h-auto border-gray-100 border-2 rounded-full">
              </a>
              <div class="text-start w-1/2 mx-2">
                <a href="https://github.com/yyunon/geck-in-rs" class="" target="_blank">
                  <span>
                    yyunon
                  </span>
                  <span class="text-gray-500">
                    /
                  </span>
                  <span>
                    geck-in-rs
                  </span>
                </a>
                <p class="text-xs text-gray-700">
                    A naive Firefox webdriver wrapper for geckodriver  
                </p>
              </div>
            </div>
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
