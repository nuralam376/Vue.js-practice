<template>
  <div>
    <Header />
    <nuxt-child />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  // layout: "users"
  components: [Header]
};
</script>
