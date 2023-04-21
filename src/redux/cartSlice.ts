import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export interface CounterState {
  whishlistNumber: number;
  productNumber: number;
  productId: any[];
  addToCartId: any[];
  isToggle: boolean;
}

const initialState: CounterState = {
  whishlistNumber: 0,
  productNumber: 0,
  productId: [],
  addToCartId: [],
  isToggle: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.productNumber++;
    },
    removeToCart: (state) => {
      state.whishlistNumber--;
    },
    removeToBusket: (state) => {
      state.productNumber--;
    },
    addToWhishlist: (state, action) => {
      if (action.payload) {
        state.whishlistNumber++;
      } else {
        state.whishlistNumber--;
      }
    },
    addToProductId: (state, action) => {
      if (state.productId.includes(action.payload)) {
        alert("product exist");
      } else {
        state.productId.push(action.payload);
      }
    },
    removeProductId: (state, action) => {
      const ind: number = state.productId.indexOf(action.payload);
      state.productId.splice(ind, 1);
    },
    addToProductCartId: (state, action) => {
      state.addToCartId.push(action.payload);
    },
    removeToProductCartId: (state, action) => {
      const cartId: number = state.addToCartId.indexOf(action.payload);
      state.addToCartId.splice(cartId, 1);
    },
    toggleChange: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const {
  addToCart,
  addToWhishlist,
  addToProductId,
  removeProductId,
  removeToCart,
  addToProductCartId,
  removeToProductCartId,
  removeToBusket,
  toggleChange,
} = cartSlice.actions;

export const selectCount = (state: AppState) => state.cart.productNumber;

export default cartSlice.reducer;
