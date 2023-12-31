import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Your TMDb API key
const apiKey = '6c97d4c3450cb0c07b635b8e4a434061';

/**
 * Thunk to fetch the top-rated movies from TMDb.
 */
export const showTopMovies = createAsyncThunk('topMovies', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    return response.data.results.slice(0, 10);
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Thunk to fetch the now-playing movies from TMDb.
 */
export const showNowPlaying = createAsyncThunk('nowPlaying', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    return response.data.results.slice(0, 10);
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Thunk to fetch trending movies of the day from TMDb.
 */
export const showTrendingMovies = createAsyncThunk('trendingMovies', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
    return response.data.results.slice(0, 5);
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Thunk to fetch movies based on a search query from TMDb.
 */
export const showSearchedMovies = createAsyncThunk('searchedMovies', async (searchedMovie, thunkAPI) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchedMovie}`);
    return response.data.results;
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Thunk to fetch detailed information about a movie by its ID from TMDb.
 */
export const showMovieDetails = createAsyncThunk('movieDetails', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    return response.data;
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);
  }
});
