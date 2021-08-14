<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section>
      <button @click="submitPost">Save Post to Firebase</button>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import axios from "axios";
export default {
  components: { PostList },

  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts: [
  //         {
  //           id: "1",
  //           thumbnail:
  //             "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
  //           title: "Vue.js",
  //           previewText: "JavaScript Library"
  //         },
  //         {
  //           id: "2",
  //           thumbnail:
  //             "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
  //           title: "Nuxt.js",
  //           previewText: "Vue.js framework"
  //         },
  //         {
  //           id: "3",
  //           thumbnail:
  //             "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
  //           title: "React.js",
  //           previewText: "JavaScript Library"
  //         }
  //       ]
  //     });
  //   }, 1500);
  // },
  methods: {
    async submitPost() {
      await axios.post(
        "https://nuxt-blog-5b260-default-rtdb.firebaseio.com/posts.json",

        {
          id: "3",
          thumbnail:
            "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
          title: "Angular.js",
          previewText: "JavaScript Framework"
        }
      );
    }
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
  // created() {
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       {
  //         id: "1",
  //         thumbnail:
  //           "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
  //         title: "Vue.js",
  //         previewText: "JavaScript Library"
  //       },
  //       {
  //         id: "2",
  //         thumbnail:
  //           "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
  //         title: "Nuxt.js",
  //         previewText: "Vue.js framework"
  //       },
  //       {
  //         id: "3",
  //         thumbnail:
  //           "https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg",
  //         title: "React.js",
  //         previewText: "JavaScript Library"
  //       }
  //     ];
  //   }, 1500);
  // },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~static/assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
