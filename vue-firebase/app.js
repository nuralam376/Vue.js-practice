const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "A Book",
      author: "Abc",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },

    handleBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e) {
      console.log(e, e.type);
    },

    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
