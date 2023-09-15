import { createSlice } from "@reduxjs/toolkit";
import { showTopMovies, showSearchedMovies, showMovieDetails, showTrendingMovies } from "./stateAction";

// Define actionArray with action creators and corresponding data names
const actionArray = [
  { action: showTopMovies, data: "topMovies" },
  { action: showSearchedMovies, data: "searchedMovies" },
  { action: showMovieDetails, data: "movieDetails" },
  { action: showTrendingMovies, data: "trendingMovies" },
  // Add other action objects as needed
];

// Define initial state based on actionArray
const initialState = {};
actionArray.forEach(({ data }) => {
  initialState[data] = {
    loading: false,
    success: false,
    message: "",
    error: false,
    data: [],
  };
});

const stateSlice = createSlice({
  name: "app",
  initialState: {
    ...initialState, // Spread the properties of initialState directly
    },
  extraReducers: (builder) => {
    actionArray.forEach(({ action, data }) => {
      builder
        .addCase(action.pending, (state) => {
          state[data].loading = true;
        })
        .addCase(action.fulfilled, (state, action) => {
          state[data].loading = false;
          state[data].data = action.payload;
          state[data].success = true;
        })
        .addCase(action.rejected, (state, action) => {
          state[data].loading = false;
          state[data].error = true;
          state[data].message = action.payload;
        });
    });
  },
});

export default stateSlice.reducer;
export const { setSearchedMovie } = stateSlice.actions;
