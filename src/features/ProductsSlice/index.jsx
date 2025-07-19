import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "fa02e066d8475ad01c1a573064a25aa5";
const BASE_URL = "https://api.themoviedb.org/3";

const initialState = {
  popularProducts: [],
  status: "idle",
  error: null,
};

export const getPopularProducts = createAsyncThunk(
  "products/getPopularProducts",
  async (page = 1) => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularProducts = action.payload;
      })
      .addCase(getPopularProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
