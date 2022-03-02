import { createAsyncThunk } from "@reduxjs/toolkit";
import { CrudApi } from "../../api/crud";

const CartApi = new CrudApi('/carts')



export const fetchCarts = createAsyncThunk("carts/fetchCarts", async () => {
  return CartApi.fetch();
});



export const updateCartById = createAsyncThunk(
  "carts/updateCartById",
  async ({ id, body }: any, thunkAPI) => {
    await CartApi.updateById(id, body);
    return thunkAPI.dispatch(fetchCarts());
  }
);
