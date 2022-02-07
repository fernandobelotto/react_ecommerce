import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "../thunks/product";


const InitialState = {
  products: [],
  productDetail: {},
  isLoading: false,
};

const productSlice = createSlice({
  initialState: InitialState,
  
  name: "products",

  reducers: {

    setProducts: (state, action) => {
      state.products = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
  },
});

export const { setProducts } = productSlice.actions;

export const ProductReducer = productSlice.reducer;
