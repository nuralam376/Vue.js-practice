<template>
  <div>
      <h1>Component B</h1>
      <p>Hello {{ userName }}</p>
  </div>
</template>

<script>
export default {
    name : "ComponentB",
    inject : ["userName"]
}
</script>

<style>

</style>