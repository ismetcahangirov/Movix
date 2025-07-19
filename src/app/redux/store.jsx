"use client";

import productsReducer from "@/features/ProductsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
