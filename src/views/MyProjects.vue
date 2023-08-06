<template>
  <div class="myprojects">
    <div class="container">
      <MyProject animationDelay="1" v-bind:projectData="fpgaProject" v-bind:summaryLength="30"/>
      <MyProject animationDelay="2" v-bind:projectData="yukselyonseldotcomProject" v-bind:summaryLength="30"/>
      <p>
        Please check my Github for the rest of my contributions and projects!
      </p>
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
          sectionBody: 
            `This project is done in ABS group in TU Delft, mainly focusing on accelerating big data applications on heterogeneous, homogeneous and future-proof systems. FPGAs (Field Programmable Gate Arrays) are integrated circuits that are reconfigurable and programmed via hardware description languages. They provide many benefits due to them being highly reconfigurable and can be configured to be application specific. The idea of my research was to focus on accelering database queries on FPGA's while abstracting the technology from the big data framework that we are using. You can find the rest of my thesis on here.`,
          icons: [iconFactory.cpp, iconFactory.cmake, iconFactory.c, iconFactory.amazonwebservices, iconFactory.python]
        }
      },
      yukselyonseldotcomProject() {
        return {
          header: "yukselyonsel.com",
          sectionBody: 
            `This website is also one of my projects to play with frontend components and get lost in UI/UX design. The frontend is written with Vue3. Moreover, I do run a server on google cloud and the backend is completely written in Rust.
            `,
          icons: [iconFactory.vuejs, iconFactory.javascript, iconFactory.rust, iconFactory.googlecloud]
        }
      },
  }
};
</script>

<style lang="scss" scoped>

.myhome {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
