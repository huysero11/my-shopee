const productListSelector = (state) => state.products.productList;
const productListStatusSelector = (state) => state.products.status;
const productListErrorSelector = (state) => state.products.error;

export {
  productListSelector,
  productListStatusSelector,
  productListErrorSelector,
};
