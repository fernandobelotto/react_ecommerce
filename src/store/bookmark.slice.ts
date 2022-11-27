import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/Product";

type InitialState = {
  bookmarks: Product[];
};
const initialState: InitialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (product) => product.productId !== action.payload.id
      );
    },
  },
});

export const { addProduct, removeProduct } = bookmarkSlice.actions;

export const bookmarkReducer = bookmarkSlice.reducer;
