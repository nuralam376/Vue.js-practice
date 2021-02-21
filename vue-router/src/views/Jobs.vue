<template>
  <h1>Jobs</h1>
  <ul>
    <li v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        {{ job.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, name: "Designer'" },
        { id: 2, name: "Developer" },
        { id: 3, name: "Devops" },
      ],
    };
  },
};
</script>

<style></style>
