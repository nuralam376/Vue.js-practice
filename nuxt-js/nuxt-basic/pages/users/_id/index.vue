<template>
  <div>
    <h1>A single page {{ $route.params.id }}</h1>
    <button @click="loadUser">Go Back</button>
  </div>
</template>

<script>
export default {
  validate(data) {
    console.log(data);
    return /^\d+$/.test(data.params.id);
  },
  methods: {
    loadUser() {
      this.$router.push("/users");
    }
  }
};
</script>
