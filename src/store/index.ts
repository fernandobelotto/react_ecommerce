import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductReducer } from "./slices/product";
import { UserReducer } from "./slices/user";
import { CartReducer } from "./slices/cart";


const reducer = {
  users: UserReducer,
  products: ProductReducer,
  cart: CartReducer,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
