<template>
  <div>
      <h1>PopUp Component</h1>
      <button @click  = "$emit('close', 'Abcd')">Close PopUp</button>
  </div>
</template>

<script>
export default {
    // emits : ["close"]
}
</script>

<style>

</style>