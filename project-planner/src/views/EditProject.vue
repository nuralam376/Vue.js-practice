<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" v-model="title" required />
    <label for="details">Details</label>
    <textarea id="details" cols="30" rows="10" v-model="details"></textarea>
    <button>Edit Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },

  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      }).then(() => {
        alert("Project updated successfully");
        this.$router.push("/projects");
      });
    },
  },

  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        this.title = data.title;
        this.details = data.details;
      });
  },
};
</script>

<style></style>
