<template>
  <div class="container">
    <button @click = "getPosts">Load Posts</button>
    <h2 v-if = "errorMessage">{{errorMessage}}</h2>
    <div v-for = "post in posts" :key = "post.id">
      <h3>{{post.id}}. {{post.title}}</h3>
      <p>{{post.body}}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// eslint-disable-next-line semi
export default {
  data () {
    return {
      posts : [],
      errorMessage : ""
    }
  },

  methods : {
    async getPosts() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.posts = response.data;
      }catch(err) {
        this.errorMessage = err.message;
      }

    }
  }
};
</script>
