<template>
  <div>
      <h1>Cards</h1>
      <div v-for = "post in posts" :key = "post.id">{{ post.title }}</div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
    async asyncData() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); 
        const posts = await response.data;
        return {
            posts : posts
        };
    },

    created()
    {
        console.log("Created", process.server);
    },

    mounted()
    {
        console.log("Mounted", process.client);
        this.posts = [];
    }
}
</script>

<style>

</style>