import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../model/Product";

type InitialStateType = {
  cart: any[],
  isLoading: boolean,
}

const InitialState: InitialStateType = {
  cart: [],
  isLoading: false,
};

const cartSlice = createSlice({
  initialState: InitialState,
  name: "carts",
  reducers: {

    // setCarts: (state, action) => {
    //   state.carts = action.payload;
    // },
    addProduct: (state, action) => {
      state.cart.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const newArray = state.cart.filter((product: Product) => product.productId !== action.payload)
      state.cart = newArray
    }

  },

  extraReducers: (builder) => {


  //   builder.addCase(fetchCarts.fulfilled, (state, action) => {
  //     state.carts = action.payload;
  //   });

  //   builder.addCase(fetchCartById.fulfilled, (state, action) => {
  //     state.cartDetail = action.payload;
  //   });
  // },


}});

export const { addProduct, removeProduct } = cartSlice.actions;

export const CartReducer = cartSlice.reducer;
