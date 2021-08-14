<template>
  <section class="featured-posts">
    <PostPreview
      v-for="post in posts"
      :key="post"
      :id="post.id"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: { PostPreview },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
