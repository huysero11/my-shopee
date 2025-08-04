import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const text_tag_name = ["", "Mall", "Yêu thích", "Yêu thích+"];

function randomInt(L, R) {
  return Math.floor(Math.random() * (R - L + 1) + L);
}

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
                textTag: text_tag_name[randomInt(0, 3)], // add manually
                detail: {
                    availabilityStatus: item.availabilityStatus ("In Stock"), 
                    brand: item.brand (""),
                    category: item.category (""),
                    description: item.description (""),
                    dimensions: item.dimensions ({width: 3, height: 4, depth: 2}),
                    discountPercentage: item.discountPercentage ("3.33"),
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
          image: item.images[0],
          textTag: text_tag_name[randomInt(0, 3)],
          detail: {
            availabilityStatus: item.availabilityStatus,
            brand: item.brand,
            category: item.category,
            description: item.description,
            dimensions: item.dimensions,
            discountPercentage: item.discountPercentage,
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
    const response = await axios.get("https://dummyjson.com/products?limit=60");

    // console.log(
    //   "In productsSlice.jsx, response.data.products[0]: ",
    //   response.data.products[0]
    // );
    return response.data.products;
  } catch (err) {
    ((state) => (state.error = err))();
  }
});

export default productsSlice;
export { fetchProducts };
