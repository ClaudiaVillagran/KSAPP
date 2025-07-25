import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    productSlice: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
