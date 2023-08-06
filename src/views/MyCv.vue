<template>
  <div class="mycv">
    <div class="container">
      <h2>Experience</h2>
        <MyExperience :animationDelay="1" title="Software Engineer" company="" logo="/assets/kpn.png" />
        <MyExperience :animationDelay="1" title="Software Engineer" company="" logo="/assets/synerscope.png" />
        <MyExperience :animationDelay="1" title="Software Engineer" company="" logo="/assets/geosignum.png" extraStyle="grey"/>
        <MyExperience :animationDelay="1" title="Control/Robotics Engineering Internship" company="" logo="/assets/roketsan.png" />
        <MyExperience :animationDelay="1" title="Software Engineering Internship" company="" logo="/assets/vodafone.png" />
      <hr />
      <h2>Education</h2>
        <MyExperience :animationDelay="1" title="MSc. Computer Engineering" company="Delft University of Technology" logo="/assets/tudelft.png" />
        <MyExperience :animationDelay="1" title="BSc. Electrical and Electronics Engineering" company="Middle East Technical University" logo="/assets/metu.png" />
      <hr/>
    </div>
  </div>
</template>

<script>
// @ is an adivas to /src
import MyExperience from '@/components/MyExperience.vue';

export default {
  name: "MyCv",
  components: {
    MyExperience,
  },
};
</script>

<style lang="scss" scoped>
.mycv {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-align: center;
  .container {
    display: inline-block;
    max-width: 40%;
    width: auto;
    height: 20px;
  }
}
</style>
