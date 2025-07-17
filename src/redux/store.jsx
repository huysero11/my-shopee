import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice.jsx";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
