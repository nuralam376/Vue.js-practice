<template>
  <p>Reaction Time - {{ score }} ms</p>
  <p>Rank : {{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],

  data() {
    return {
      rank: null,
    };
  },

  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja fingers";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace";
    }
  },
};
</script>

<style></style>
