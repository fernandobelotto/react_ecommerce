import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../model/Product";

type InitialState = {
  products: Product[];
};
const initialState: InitialState = {
  products: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    bookmarkProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { bookmarkProduct, removeBookmark } = bookmarkSlice.actions;

export const bookmarkReducer = bookmarkSlice.reducer;
