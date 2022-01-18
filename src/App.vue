<template>
  <div id="app">
    <HcodeHeader />
    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from "./components/HcodeHeader.vue";
import HcodeFooter from "./components/HcodeFooter";

export default {
  name: "App",
  components: {
    HcodeHeader,
    HcodeFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
