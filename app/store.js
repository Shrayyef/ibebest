/** @format */

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app";
import { combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import cartSlice from "./reducers/cart";

const reducer = combineReducers({
  [appReducer.name]: appReducer.reducer,
  [cartSlice.name]: cartSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
