<template>
  <div>
    <Modal />
  </div>
</template>

<script>
import Modal from "./components/Modal";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "First Vue App",
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
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
</style>
