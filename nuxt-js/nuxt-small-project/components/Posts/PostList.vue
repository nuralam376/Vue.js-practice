<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      thumbnail="https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg"
      title="Vue.js"
      previewText="JavaScript Library"
    />
    <PostPreview
      id="2"
      thumbnail="https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg"
      title="Nuxt.js"
      previewText="Vue.js framework"
    />
    <PostPreview
      id="3"
      thumbnail="https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg"
      title="React.js"
      previewText="JavaScript Library"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: { PostPreview }
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
