<template>
  <div v-if="job">
    <h1>Job Details : {{ id }}</h1>
    <h2>{{ job.title }}</h2>
    <p>{{ job.details }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
      // id: this.$route.params.id,
    };
  },

  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
        this.job = data;
      })
      .catch((err) => console.log("Err", err));
  },
};
</script>

<style></style>
