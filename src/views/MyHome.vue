<template>
  <div class="myhome">
    <div class="container">
      <h4>Who am I?</h4>
      <p>
      I am a software engineer, based in Netherlands. I make software that prepares data to many. Other times that I don't work on software, I do lots of sports and dance. 
      </p>
      <hr />
      <h4>Experience</h4>
        <ul style="list-style-type:none">
          <li>MSc., Computer Engineering, Delft University of Technology</li>
          <li>BSc., Electrical and Electronics Engineering, Middle East Technical University</li>
        </ul>
      <hr />
      <h4>Education</h4>
        <ul style="list-style-type:none">
          <li>MSc., Computer Engineering, Delft University of Technology</li>
          <li>BSc., Electrical and Electronics Engineering, Middle East Technical University</li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MyHome",
  components: {},
};
</script>

<style lang="scss" scoped>

.myhome {
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  padding: 50px;
}
</style>
