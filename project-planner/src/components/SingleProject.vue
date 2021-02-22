<template>
  <h1 @click="showDetails = !showDetails">{{ project.title }}</h1>
  <div class="details" v-if="showDetails">
    {{ project.details }}
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
    };
  },
};
</script>

<style></style>
