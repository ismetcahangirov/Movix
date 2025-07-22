"use client";

const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "@/features/authSlice";
import moviesReducer from "@/features/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
});
