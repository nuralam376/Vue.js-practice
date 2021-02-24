<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="title" required />
    <label for="details">Details</label>
    <textarea
      id="details"
      v-model="details"
      cols="30"
      rows="10"
      required
    ></textarea>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },

  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => {
          alert("Project created successfully");
          this.$router.push("/projects");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  padding: 10px;
  color: white;
  margin: 20px auto 0;
  background: #00ce89;
  border: 0;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
