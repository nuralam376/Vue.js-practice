<template>
  <div>
    <h1>{{ title }} Layout</h1>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/inspire">Inspire</nuxt-link>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Default"
    };
  }
};
</script>

<style scoped></style>
