import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
