<template>
  <div class="backdrop" @click.self="closeModal">
    <teleport to=".modals" class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="links">
        <slot name="links"></slot>
      </div>
    </teleport>
  </div>

  <teleport to=".modals" class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["header", "text", "theme"],

  methods: {
    closeModal() {
      this.$emit("close");
    },

    closeModalTwo() {
      this.$emit("close");
    },
  },
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
.modals.modal {
  width: 400px;
  padding: 20px;
  margin: 120px auto;
  background: white;
  border-radius: 10px;
}
.modals.modal h1,
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
