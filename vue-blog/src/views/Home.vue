<template>
  <div class="home">
    <PostLists :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
import PostLists from "../components/PostLists";
export default {
  name: "Home",
  components: { PostLists },

  setup() {
    const posts = ref([
      { id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet" },
      {
        id: 2,
        title: "Post 2",
        body: "Amet consectetur lorem ipsum dolor sit amet",
      },
    ]);

    return { posts };
  },
};
</script>
