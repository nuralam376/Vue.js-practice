<template>
  <h1 v-if="showBlock" @click="stopTimer">Playing</h1>
</template>

<script>
export default {
  props: ["delay"],

  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },

  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },

    stopTimer() {
      clearInterval(this.timer);
      console.log("Timer", this.reactionTime);
    },
  },
};
</script>

<style scoped>
h1 {
  width: 400px;
  padding: 100px 0;
  text-align: center;
  background: green;
  margin: 50px auto;
}
</style>
