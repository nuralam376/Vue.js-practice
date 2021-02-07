const app = Vue.createApp({
  data: function () {
    return {
      variants: [
        {
          id: 1,
          name: "Vanilla",
          price: 100,
        },
        {
          id: 2,
          name: "Chocolate",
          price: 90,
        },
        {
          id: 3,
          name: "Strawberry",
          price: 80,
        },
        {
          id: 4,
          name: "orange",
          price: 70,
        },
        {
          id: 5,
          name: "lemon",
          price: 60,
        },
      ],
      cart: [],
    };
  },

  methods: {
    addToCart(variantId) {
      let variant = this.variants.find((variant) => variant.id === variantId);
      this.cart.push(variant);
    },

    removeFromCart(variantId) {
      const variantPosition = this.variants.findIndex(
        (variant) => variant.id === variantId
      );

      this.cart.splice(variantPosition, 1);
    },
  },
  computed: {
    total() {
      return this.cart.reduce((sum, variant) => sum + variant.price, 0);
    },
  },
});
