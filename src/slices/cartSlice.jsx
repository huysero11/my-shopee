import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [
      // {
      //   id: 0,
      //   name: "",
      //   price: 0,
      //   quantity: 0,
      //   image: "",
      //   checked: false,
      //   textTag: ""
      // },
    ],
    totalQuantity: 0,
    totalPrice: 0,
    allCheckboxTicked: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      console.log("In cartSlice, Adding to cart:", newProduct);
      const existingProduct = state.cartItems.find(
        (item) => item.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
      } else {
        state.cartItems.push(newProduct);
      }

      state.totalQuantity++;
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const [product] = state.cartItems.filter((item) => item.id == id);
      product.quantity++;

      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return item.checked ? sum + item.price * item.quantity : sum;
      }, 0);
      // console.log(
      //   "in cartSlice, increase product quantity, cartItems: ",
      //   state.cartItems
      // );
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const [product] = state.cartItems.filter((item) => item.id == id);
      if (product.quantity > 1) {
        product.quantity--;
      }

      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return item.checked ? sum + item.price * item.quantity : sum;
      }, 0);
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != id);

      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return item.checked ? sum + item.price * item.quantity : sum;
      }, 0);
    },
    tickCheckbox: (state, action) => {
      const id = action.payload;
      const [product] = state.cartItems.filter((item) => item.id == id);
      product.checked = !product.checked;

      state.totalPrice = state.cartItems.reduce((sum, item) => {
        return item.checked ? sum + item.price * item.quantity : sum;
      }, 0);

      // -----------
      const allSelected =
        state.cartItems.length > 0 &&
        state.cartItems.every((item) => item.checked === true);

      state.allCheckboxTicked = allSelected;
      // console.log(
      //   "in cartSlice, when toggle a product, allCheckboxTicked = ",
      //   state.allCheckboxTicked
      // );
    },
    tickAllCheckbox: (state) => {
      const allSelected =
        state.cartItems.length > 0 &&
        state.cartItems.every((item) => item.checked);

      const newChecked = !allSelected;

      state.cartItems.forEach((item) => {
        item.checked = newChecked;
      });

      state.allCheckboxTicked = newChecked;

      state.totalPrice = state.cartItems.reduce(
        (sum, item) => (item.checked ? sum + item.price * item.quantity : sum),
        0
      );
    },
    buy: (state) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.checked === false
      );
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.allCheckboxTicked = false;
    },
  },
});

export default cartSlice;
