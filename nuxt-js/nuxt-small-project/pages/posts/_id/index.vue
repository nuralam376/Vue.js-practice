<template>
  <div class="single-post-page">
    <div class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <!-- <div>Last updated on {{ loadedPost.updatedDate }}</div> -->
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.previewText }}</p>
      <section class="post-feedback">
        <p>
          {{ loadedPost.content }}
          <a href="mailto: test@test.com">Test</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-5b260-default-rtdb.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then(res => {
        console.log("res", res);
        return { loadedPost: res.data };
      })
      .catch(err => console.error(err));
  },

  created() {
    this.$store.dispatch("setPosts", this.loadedPost);
    console.log("posts", this.$store.getters.loadedPosts);
  }
};
</script>
