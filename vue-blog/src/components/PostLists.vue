<template>
  <h1>All Posts</h1>
  <ul v-if="showPosts">
    <li v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </li>
  </ul>
  <button @click="showPosts = !showPosts">Show Posts</button>
  <button @click="posts.pop">Delete Post</button>
</template>

<script>
import SinglePost from "../components/SinglePost";
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

export default {
  props: ["posts"],
  components: {
    SinglePost,
  },

  setup() {
    onMounted(() => console.log("Component mounted"));
    onUpdated(() => console.log("Component updated"));
    onUnmounted(() => console.log("Component unmounted"));

    const showPosts = ref(true);

    return { showPosts };
  },
};
</script>

<style></style>
