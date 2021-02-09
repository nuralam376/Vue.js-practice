const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "A Book",
      author: "Abc",
      age: 45,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },

    handleBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
