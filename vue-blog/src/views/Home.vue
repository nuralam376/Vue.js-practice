<template>
  <div class="home">
    <h1>Composition API</h1>
    <p ref="p">{{ name }} {{ age }}</p>
    <button @click="handleClick">Button</button>
    <input type="text" v-model="name" />
    <button @click="age++">Increase age</button>

    <br />
    <h3>{{ person.name }} - {{ person.age }} - {{ anotherName }}</h3>
    <button @click="updatePerson">Update Person Age</button>

    <br />

    <h3>{{ person2.name }} - {{ person2.age }} - {{ newName }}</h3>
    <button @click="updatePerson2">Update Person 2</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Home",
  components: {},

  setup() {
    console.log("Setup'");

    let name = ref("Abc");
    let age = reactive(45);
    const person = reactive({ name: "Def", age: 30 });
    const person2 = ref({ name: "Abc", age: 20 });

    let newName = ref("test");
    let anotherName = reactive("test2");

    const updatePerson = () => {
      person.age = 40;
      newName = "s";
    };

    const updatePerson2 = () => {
      person2.value.age = 30;
      anotherName = "test22";
    };

    const handleClick = () => {
      console.log("button clicked");
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "hello";
    };

    const p = ref(null);

    return {
      name,
      age,
      handleClick,
      p,
      person,
      updatePerson,
      person2,
      updatePerson2,
      anotherName,
      newName,
    };
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
