<template>
  <h1>Projects</h1>
  <div v-if="projects.length">
    <div v-for="project in projects" :key="project.id">
      <SingleProject
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject";
export default {
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },

  methods: {
    handleDelete(id) {
      console.log("id", id);
      this.projects = this.projects.filter((project) => project.id !== id);
    },

    handleComplete(id) {
      let project = this.projects.find((pj) => pj.id === id);
      project.complete = !project.complete;
    },
  },
};
</script>

<style></style>
