<template>
  <div class="backdrop">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
};
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 120px auto;
  background: white;
  border-radius: 10px;
}
.modal h1,
p {
  color: green;
  border: none;
}

.sale {
  background: crimson;
}

.sale h1,
p {
  color: white;
}
</style>
