/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add_to_cart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    set_cart: (state, action) => {
      state.items = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.cart,
        };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_to_cart, set_cart } = cartSlice.actions;

export default cartSlice;
