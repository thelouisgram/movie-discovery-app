import { createSlice } from "@reduxjs/toolkit";
import {
  showTopMovies,
  showSearchedMovies,
  showMovieDetails,
  showTrendingMovies,
} from './stateAction'

// Define a Redux slice for the app state
const stateSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,         // Indicates if data is currently being fetched
    success: false,         // Indicates if the last action was successful
    message: '',            // Stores error or informational messages
    error: false,           // Indicates if an error occurred
    searchedMovie: '',      // Stores the searched movie query
    topMovies: [],          // Stores the top-rated movies
    searchedMovies: [],     // Stores the results of the movie search
    movieDetails: [],       // Stores details of a specific movie
    trendingMovies: [],     // Stores trending movies
    nav: false,             // Indicates whether the mobile navigation is open
    trendLoading: false,
    trendError: false,
    trendSuccess: false,
    trendMessage: '',
  },
  reducers: {
    reset: (state) => {
      state.searchedMovie = '';
      state.searchedMovies = [];
      state.movieDetails = [];
    },
    resetError:(state) => {
      state.error = false;
    },
    setSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
    setNav: (state, action) => {
      state.nav = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showTopMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(showTopMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.topMovies = action.payload;
        state.success = true;
      })
      .addCase(showTopMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.topMovies = [];
      })
      .addCase(showSearchedMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSearchedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedMovies = action.payload;
        state.success = true;
      })
      .addCase(showSearchedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.searchedMovies = [];
      })
      .addCase(showMovieDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(showMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
        state.success = true;
      })
      .addCase(showMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.movieDetails = [];
      })
      .addCase(showTrendingMovies.pending, (state) => {
        state.trendLoading = true;
      })
      .addCase(showTrendingMovies.fulfilled, (state, action) => {
        state.trendLoading = false;
        state.trendingMovies = action.payload;
        state.trendSuccess = true;
      })
      .addCase(showTrendingMovies.rejected, (state, action) => {
        state.trendLoading = false;
        state.trendError = true;
        state.trendMessage = action.payload;
        state.trendingMovies = [];
      });
  },
});

export default stateSlice.reducer;
export const { reset, setSearchedMovie, setNav, resetError } = stateSlice.actions;