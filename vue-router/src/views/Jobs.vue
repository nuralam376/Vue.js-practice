<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          {{ job.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data;
      })
      .catch((err) => console.log("Err", err.message));
  },
};
</script>

<style></style>
