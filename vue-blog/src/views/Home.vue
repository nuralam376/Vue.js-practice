<template>
  <div class="home">
    <h1>Composition API</h1>
    <p ref="p">{{ name }} {{ age }}</p>
    <button @click="handleClick">Button</button>
    <input type="text" v-model="name" />
    <button @click="age++">Increase age</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  components: {},

  setup() {
    console.log("Setup'");

    const name = ref("Abc");
    const age = ref(45);

    const handleClick = () => {
      console.log("button clicked");
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "hello";
    };

    const p = ref(null);

    return { name, age, handleClick, p };
  },

  created() {
    console.log("Created");
  },

  mounted() {
    console.log("Mounted");
  },

  updated() {
    console.log("Updated");
  },
};
</script>
