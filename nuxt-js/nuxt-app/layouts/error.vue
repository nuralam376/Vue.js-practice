<template>
  <div>
    <h1>Error Page - {{ error.statusCode }} not found</h1>
  </div>
</template>

<script>
export default {
  layout: "error-layout",
  props: {
    error: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
