import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice.jsx";
import cartSlice from "../slices/cartSlice.jsx";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
