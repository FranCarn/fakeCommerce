import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../pages/HomePage/HomePage";

const initialState: Item[] = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    removeAll: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
