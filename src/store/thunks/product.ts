import { createAsyncThunk } from "@reduxjs/toolkit";
import { CrudApi } from "../../api/crud";

const ProductApi = new CrudApi('/products')

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (payload: any) => {
    return ProductApi.create(payload);
  }
);

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  return ProductApi.fetch();
});

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string) => {
    return ProductApi.fetchById(id);
  }
);

export const updateProductById = createAsyncThunk(
  "products/updateProductById",
  async ({ id, body }: any, thunkAPI) => {
    await ProductApi.updateById(id, body);
    return thunkAPI.dispatch(fetchProducts());
  }
);

export const deleteProductById = createAsyncThunk(
  "products/deleteProductById",
  async (id: string, thunkAPI) => {
    await ProductApi.deleteById(id);
    return thunkAPI.dispatch(fetchProducts());
  }
);
