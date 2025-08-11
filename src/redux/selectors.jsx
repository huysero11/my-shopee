import { createSelector } from "@reduxjs/toolkit";

const productListSelector = (state) => state.products.productList;
const productListStatusSelector = (state) => state.products.status;
const productListErrorSelector = (state) => state.products.error;

const cartItemsSelector = (state) => state.cart.cartItems;
const totalQuantitySelector = (state) => state.cart.totalQuantity;
const totalPriceSelector = (state) => state.cart.totalPrice;
const allCheckboxTickedSelector = (state) => state.cart.allCheckboxTicked;

const totalSelectedQuantitySelector = createSelector(
  cartItemsSelector,
  (cartItems) => {
    return cartItems.filter((item) => item.checked === true).length;
  }
);

export {
  productListSelector,
  productListStatusSelector,
  productListErrorSelector,
  cartItemsSelector,
  totalQuantitySelector,
  totalPriceSelector,
  totalSelectedQuantitySelector,
  allCheckboxTickedSelector,
};
