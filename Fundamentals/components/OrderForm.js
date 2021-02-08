app.component("order-form", {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  template: /* html */ ` <div class="vue" id="modal">
    <div class="backdrop" @click = "hideShowModal()" ></div>
        <div class="modalBody">
            <div class="formContainer vue" id="orderForm">
                <h1>Complete the form below and hit submit</h1>
                <form class="orderForm" @submit.prevent = "orderDetails">
                    <ul>
                        <li>
                        <input
                            type="text"
                            v-model="name"
                            class="fieldStyle fieldSplit alignLeft"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            v-model="phone"
                            class="fieldStyle fieldSplit alignRight"
                            placeholder="Phone no."
                        />
                        </li>
                        <li>
                        <input
                            type="text"
                            v-model="email"
                            class="fieldStyle fieldFull"
                            placeholder="Email"
                        />
                        </li>
                        <li>
                        <textarea
                            v-model="address"
                            class="fieldStyle"
                            placeholder="Address"
                        ></textarea>
                        </li>
                        <li>
                        <input
                            type="hidden"
                            v-model="total"
                            class="fieldStyle fieldFull"
                        />
                        </li>
                        <li>
                        <input type="submit" value="Proceed" />
                        </li>
                    </ul>
                </form>
            </div>
    </div>
</div>`,
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      address: "",
    };
  },

  methods: {
    hideShowModal() {
      this.$emit("toggle-order-form");
    },

    orderDetails() {
      const orders = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        address: this.address,
      };

      console.log("Order Details", orders);
      this.hideShowModal();
      this.$emit("clear-cart");
    },
  },
});
