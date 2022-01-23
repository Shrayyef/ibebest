/** @format */

import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: "",
    loggedIn: false,
    user: {},
    drawer: false,
  },
  reducers: {
    login: (state, action) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token);
      }
      state.token = action.payload.token;
      state.user = action.payload.user || {};
      state.loggedIn = true;
    },
    logout: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      cookie.remove("token");
      state.token = "";
      state.user = {};
      state.loggedIn = false;
    },
    toggleDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    closeDrawer: (state) => {
      state.drawer = false;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.app,
        };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, toggleDrawer, closeDrawer, logout } = appSlice.actions;

export default appSlice;
