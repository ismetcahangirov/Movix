"use client";

import moviesReducer from "@/features/ProductsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
