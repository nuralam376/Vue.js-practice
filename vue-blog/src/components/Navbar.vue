<template>
  <div class="header">
    <h1>Blog</h1>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Create' }">Create</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  padding: 20px;
}

.header a {
  text-decoration: none;
  padding: 10px 20px;
  color: #555;
}

.header a.router-link-active {
  color: black;
}
</style>
