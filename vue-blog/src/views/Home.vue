<template>
  <div class="home">
    <p v-if="errors">{{ errors }}</p>
    <div v-if="posts.length">
      <PostLists :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <p v-else><Spinner /></p>
  </div>
</template>

<script>
import PostLists from "../components/PostLists";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";

export default {
  name: "Home",
  components: { PostLists, Spinner, TagCloud },

  setup() {
    const { posts, errors, load } = getPosts();

    load();

    return { posts, errors, load };
  },
};
</script>
