import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const errors = ref(null);

  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw new Error("No data available");
      }
      posts.value = await data.json();
    } catch (err) {
      errors.value = err.message;
      console.log(errors.value);
    }
  };

  return { posts, errors, load };
};

export default getPosts;
