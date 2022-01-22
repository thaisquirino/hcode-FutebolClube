<template>
  <div id="app">
    <HcodeHeader @select-championship="changeChampionship" />
    <HcodeSection :championship="championship" />
    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from "./components/HcodeHeader.vue";
import HcodeFooter from "./components/HcodeFooter.vue";
import HcodeSection from "./components/HcodeSection.vue";

export default {
  name: "App",
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection,
  },
  data() {
    return {
      championship: "Campeonato Brasileiro",
    };
  },
  methods: {
    changeChampionship(value) {
      this.championship = value;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
