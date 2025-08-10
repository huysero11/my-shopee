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
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const [product] = state.cartItems.filter((item) => item.id == id);
      product.quantity++;

      console.log(
        "in cartSlice, increase product quantity, cartItems: ",
        state.cartItems
      );
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const [product] = state.cartItems.filter((item) => item.id == id);
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != id);
    },
  },
});

export default cartSlice;
