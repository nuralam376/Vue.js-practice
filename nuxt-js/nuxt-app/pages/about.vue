<template>
  <div>
    <h1>{{ title }} Page</h1>
  </div>
</template>

<script>
export default {
  middleware: "test",
  async asyncData() {
    return { title: "About" };
  },

  head() {
    return {
      title: "About",

      script: [{ src: "./about.js" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About Page Content"
        }
      ]
    };
  }
};
</script>

<style></style>
