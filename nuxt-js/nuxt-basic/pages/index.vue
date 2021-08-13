<template>
  <div>
    <Header />
    <h1>Hello Nuxt.js</h1>
    <nuxt-link to="/users">Users</nuxt-link>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  // layout: "users"
  components: [Header]
};
</script>
