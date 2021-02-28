<template>
  <div class="form">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input type="text" v-model="title" />
      <label for="body">Body</label>
      <textarea v-model="body" required></textarea>
      <label for="tags">Tags</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
      <p v-for="tag in tags" :key="tag">#{{ tag }}</p>
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref(null);
    const body = ref(null);
    const tags = ref([]);
    const tag = ref(null);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post),
      });
    };

    return { title, body, tags, handleKeyDown, tag, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 10px;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
}
</style>
