<template>
  <div class="myhome">
    <div class="container">
      <h4>Who am I?</h4>
      <div class="whoami">
        <img src="/assets/IMG_20221231_100906.jpg">
        <div>
        I am a software engineer, based in Netherlands. I make software that prepares data to many whom in need of it. I tend to do lots of recreational programming while trying different languages and frameworks. I am currently working at KPN which is the leading telecommunications and IT provider,a market leader in Netherlands. I like spending my free time with doing Latin dances and indoor sports.
        </div>
      </div>
      <h4>See some of my posts</h4>
        <ul style="list-style-type:none">
          <li></li>
          <li></li>
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
  .container {
    .whoami {
      display: flex;
      flex-direction:row;
      max-width: 789px;
      max-height: 1161px;

      img {
        border-radius: 10px;
        max-width: 263px;
        max-height: 387px;
      }
    }
  }
}
</style>
