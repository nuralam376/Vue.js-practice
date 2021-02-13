const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "A Book",
      author: "Abc",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "The book of Abc",
          author: "Abc",
          img:
            "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg",
          fav: true,
        },
        {
          title: "The book of Def",
          author: "Def",
          img:
            "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg",
          fav: false,
        },
        {
          title: "The book of Ghi",
          author: "Ghi",
          img:
            "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg",
          fav: true,
        },
      ],
      url: "https://www.google.com",
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
    toggleImage(book) {
      book.fav = !book.fav;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.fav);
    },
  },
});

app.mount("#app");
