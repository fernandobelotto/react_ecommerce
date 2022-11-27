import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../model/Product";

type InitialState = {
  products: Product[];
};
const initialState: InitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
