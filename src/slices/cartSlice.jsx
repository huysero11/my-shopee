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

      state.totalQuantity += newProduct.quantity;
    },
  },
});

export default cartSlice;
