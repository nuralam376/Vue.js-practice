<template>
  <div>
    <h1>{{ title }}</h1>
    <br />
    <input type="text" ref="name" />
    <button @click="handleClick">Click</button>
    <Modal theme="sale" v-if="showModal" @close="handleShowModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">Login</a>
      </template>
      <h1>Modal Header</h1>
      <p>Modal Content</p>
    </Modal>
    <button @click="handleShowModal">Show Modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "First Vue App",
      header: "Modal Header",
      text: "Modal Text",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      this.$refs.name.focus();
      this.$refs.name.classList.add("active");
    },

    handleShowModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid pink;
  display: inline-block;
  padding: 10px 0;
}
</style>
