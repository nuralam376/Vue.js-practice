<template>
  <div>
    <TheHeader @sidenavToggle="sideNavToggle = !sideNavToggle" />
    <TheSidenav :show="sideNavToggle" @close="sideNavToggle = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  components: { TheHeader, TheSidenav },
  data() {
    return {
      sideNavToggle: false
    };
  }
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
