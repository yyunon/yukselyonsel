<template>
  <div class="myc">
    <div class="container">
      <h4>Experience</h4>
        <ul style="list-style-type:none">
          <li>Software Engineer</li>
          <li>Software Engineer</li>
          <li>Software Engineer</li>
          <li>Internship</li>
          <li>Internship</li>
        </ul>
      <hr />
      <h4>Education</h4>
        <ul style="list-style-type:none">
          <li>Msc. Computer Engineering,  Delft University of Technology, Netherlands</li>
          <li>BSc. Electrical and Electronics Engineering, Middle East Technical University, Turkey</li>
        </ul>
      <hr />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyCv",
  components: {},
};
</script>

<style lang="scss" scoped>

.mycv {
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
}
</style>
