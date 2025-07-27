import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "fa02e066d8475ad01c1a573064a25aa5";
const BASE_URL = "https://api.themoviedb.org/3";

const loadSavedMovies = () => {
  if (typeof window === "undefined") return [];
  try {
    const getSavedMovie = localStorage.getItem("savedMovies");
    if (getSavedMovie === null) return [];
    return JSON.parse(getSavedMovie);
  } catch {
    return [];
  }
};

const saveToLocalStorage = (savedMovies) => {
  try {
    const saveMovie = JSON.stringify(savedMovies);
    localStorage.setItem("savedMovies", saveMovie);
  } catch (err) {
    console.log("error" + err);
  }
};

const initialState = {
  savedMovies: loadSavedMovies(),
  popularMovies: [],
  top10Movies: [],
  movie: null,
  similarMovies: [],
  trailer: null,
  status: "idle",
  error: null,
};

export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async (page = 1) => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  }
);

export const getTop10Movies = createAsyncThunk(
  "movies/getTop10Movies",
  async () => {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results.slice(0, 10);
  }
);

export const getMovieById = createAsyncThunk(
  "movies/getMovieById",
  async (movieId) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
);

export const getSimilarMovies = createAsyncThunk(
  "movies/getSimilarMovies",
  async (movieId) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  }
);

export const getMovieTrailer = createAsyncThunk(
  "movies/getMovieTrailer",
  async (movieId) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    toggleSaveMovie: (state, action) => {
      const movie = action.payload;
      const index = state.savedMovies.findIndex((m) => m.id === movie.id);
      if (index >= 0) {
        state.savedMovies.splice(index, 1);
      } else {
        state.savedMovies.push(movie);
      }
      saveToLocalStorage(state.savedMovies);
    },
  },
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
      })

      .addCase(getSimilarMovies.pending, (state) => {
        state.similarMovies = [];
      })
      .addCase(getSimilarMovies.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
      })
      .addCase(getSimilarMovies.rejected, (state) => {
        state.similarMovies = [];
      })

      .addCase(getMovieTrailer.pending, (state) => {
        state.trailer = null;
      })
      .addCase(getMovieTrailer.fulfilled, (state, action) => {
        state.trailer = action.payload;
      })
      .addCase(getMovieTrailer.rejected, (state) => {
        state.trailer = null;
      });
  },
});

export const { toggleSaveMovie } = movieSlice.actions;
export default movieSlice.reducer;
