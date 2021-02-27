<template>
  <div class="home">
    <p v-if="errors">{{ errors }}</p>
    <div v-if="posts.length">
      <PostLists :posts="posts" />
    </div>
    <p v-else>Loading....</p>
  </div>
</template>

<script>
import PostLists from "../components/PostLists";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { PostLists },

  setup() {
    const { posts, errors, load } = getPosts();
    console.log("posts", posts);
    load();

    return { posts, errors, load };
  },
};
</script>
