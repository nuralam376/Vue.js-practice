<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <p v-else-if="!error">Loading....</p>
  <p v-if="error">{{ error }}</p>
</template>

<script>
import getPost from "../composables/getPost";

export default {
  props: ["id"],

  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();

    return { post, error, load };
  },
};
</script>

<style></style>
