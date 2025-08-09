"use client";

import authReducer from "./features/authSlice";
import movieReducer from "./features/MovieSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    auth: authReducer,
  },
});
