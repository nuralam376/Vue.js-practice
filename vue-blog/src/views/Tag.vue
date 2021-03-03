<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostLists :posts="postWithTags" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import PostLists from "../components/PostLists";
import Spinner from "../components/Spinner";
import { computed } from "vue";
export default {
  components: { PostLists, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postWithTags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });
    return { error, posts, postWithTags };
  },
};
</script>

<style></style>
