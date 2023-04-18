import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export interface CounterState {
  whishlistNumber: number;
  productNumber: number;
}

const initialState: CounterState = {
  whishlistNumber: 0,
  productNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.productNumber++;
    },
    addToWhishlist: (state, action) => {
      if (action.payload) {
        state.whishlistNumber++;
      } else {
        state.whishlistNumber--;
      }
    },
  },
});

export const { addToCart, addToWhishlist } = cartSlice.actions;

export const selectCount = (state: AppState) => state.cart.productNumber;

export default cartSlice.reducer;
