<template>
  <div class="myprojects">
    <div class="hero-text container">
      <h4>Projects</h4>
      <hr />
      <p>
      I enjoy using new frameworks and languages while trying to reinvent the wheel.
      </p>
      <hr />
      <h5>Exploring the limits of query pushdown for SQL Acceleration on FPGAs</h5>
      <div class="project-container">
        <div class="sectionHeader" v-on:click="toggleSection">
          This project is done in ABS group in TU Delft, mainly focusing on accelerating big data applications on heterogeneous, homogeneous and future-proof systems... 
        </div>
        <div class="sectionBody" v-show="showSection">
        FPGAs (Field Programmable Gate Arrays) are integrated circuits that are reconfigurable and programmed via hardware description languages. They provide many benefits due to them being highly reconfigurable and can be configured to be application specific. The idea of my research was to focus on accelering database queries on FPGA's while abstracting the technology from the big data framework that we are using. You can find the rest of my thesis on here. 
        </div>
      </div>
      <hr />
      <h5>Is Deep Image Prior reproducible?</h5>
      <p>
      </p>
      <hr />
      <h5>Architectural Analysis of Ludwig</h5>
      <p>
      </p>
      <hr />
      <h5>Terminal Editor written in Rust</h5>
      <p>
      </p>
      <hr />
      <h5>www.yukselyonsel.com</h5>
      <p>
      This website is also one of my projects to play with frontend components and get lost in UI/UX design. The website is written with Vue3.
      </p>
      <hr />
      <p>
        Please check my Github for the rest of my contributions and projects!
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyProjects",
  methods: {
    toggleSection() {
      this.showSection = !this.showSection
    }
  },
  data() {
    return {
      showSection: false,
    }
  }
};
</script>

<style lang="scss" scoped>

.myhome {
  display: flex;
  width: 100%;
  justify-content: center;

  .project-container{
    cursor: pointer;
  }
}
</style>
