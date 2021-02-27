<template>
  <h1>{{ post.title }}</h1>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],

  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 15) + "....";
    });

    return { snippet };
  },
};
</script>

<style></style>
