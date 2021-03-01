<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <p v-else-if="!error"><Spinner /></p>
  <p v-if="error">{{ error }}</p>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  components: { Spinner },

  setup() {
    const route = useRoute();

    const { post, error, load } = getPost(route.params.id);
    load();

    return { post, error, load };
  },
};
</script>

<style></style>
