<template>
  <div>
    <h1>Blog Page - {{ slug.post }}</h1>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.post);
  },
  data() {
    return {
      slug: this.$route.params
    };
  }
};
</script>

<style></style>
