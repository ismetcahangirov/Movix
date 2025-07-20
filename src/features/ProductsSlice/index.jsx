import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "fa02e066d8475ad01c1a573064a25aa5";
const BASE_URL = "https://api.themoviedb.org/3";

const initialState = {
  popularMovies: [],
  top10Movies: [],
  movie: null,
  status: "idle",
  error: null,
};

export const getPopularMovies = createAsyncThunk(
  "Movies/getPopularMovies",
  async (page = 1) => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  }
);

export const getTop10Movies = createAsyncThunk(
  "Movies/getTop10Movies",
  async () => {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results.slice(0, 10);
  }
);

export const getMovieById = createAsyncThunk(
  "Movies/getMovieById",
  async (movieId) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
);

export const MoviesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularMovies = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getTop10Movies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getTop10Movies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top10Movies = action.payload;
      })
      .addCase(getTop10Movies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getMovieById.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.movie = null;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.movie = null;
      });
  },
});

export default MoviesSlice.reducer;
