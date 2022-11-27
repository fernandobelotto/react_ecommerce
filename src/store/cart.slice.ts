import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/Product";

type InitialState = {
  cart: Product[];
};
const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.productId !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.productId === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    },
  },
});

export const { addProduct, increaseQuantity, removeProduct } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
