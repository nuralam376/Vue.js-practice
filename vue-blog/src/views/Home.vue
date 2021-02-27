<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search.value }}</p>
    <p v-for="name in matchingNames" :key="name">{{ name }}</p>
    <button @click="handleEffect">Stop Watch</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "Home",
  components: {},

  setup() {
    const search = ref("");
    const names = ref(["Abc", "Def", "Ghi", "Jkl", "Mno"]);
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const stopWatch = watch(search, () => {
      console.log("Watch function ran");
    });

    const stopWatchEffect = watchEffect(() => {
      console.log("Watch Effect function ran", search.value);
    });

    const handleEffect = () => {
      stopWatch();
      stopWatchEffect();
    };

    return {
      names,
      search,
      matchingNames,
      stopWatch,
      stopWatchEffect,
      handleEffect,
    };
  },
};
</script>
