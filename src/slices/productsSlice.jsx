import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    error: "null",
    productList: [
      /*
                id: item.id,
                name: item.title,
                price: item.price,
                image: item.thumbnail,
                detail: {
                    availabilityStatus: item.availabilityStatus ("In Stock"), 
                    brand: item.brand (""),
                    description: item.description (""),
                    dimensions: item.dimensions ({width: 3, height: 4, depth: 2}),
                    rating: item.rating (4.2),
                    returnPolicy: item.returnPolicy (""),
                    shippingInformation: item.shippingInformation (""),
                    stock: item.stock (123),
                    tags: item.tags ([""]),
                    warrantyInformation: item.warrantyInformation (""),
                    weight: item.weight (123)
                },
                reviews: item.reviews ([
                    {rating: 5, comment: "", date: "", reviewerName: "", reviewerEmail: ""},
                ])
            */
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.productList = action.payload.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.thumbnail,
          detail: {
            availabilityStatus: item.availabilityStatus,
            brand: item.brand,
            description: item.description,
            dimensions: item.dimensions,
            rating: item.rating,
            returnPolicy: item.returnPolicy,
            shippingInformation: item.shippingInformation,
            stock: item.stock,
            tags: item.tags,
            warrantyInformation: item.warrantyInformation,
            weight: item.weight,
          },
          reviews: item.reviews,
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products?limit=50");
    return response.data.products;
  } catch (err) {
    ((state) => (state.error = err))();
  }
});

export default productsSlice;
export { fetchProducts };
