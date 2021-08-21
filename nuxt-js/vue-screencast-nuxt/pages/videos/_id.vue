<template>
  <nuxt-child :video="$store.state.video"></nuxt-child>
</template>

<script>
export default {
  props: ["videos"],
  head: {
    title: "Post Details"
  },

  async asyncData({ $axios, params, store }) {
    const res = await $axios.get("/posts/" + params.id);

    store.commit("SET_VIDEO", res.data);
  }
};
</script>
