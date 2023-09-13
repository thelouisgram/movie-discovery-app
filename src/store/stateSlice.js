import { createSlice } from "@reduxjs/toolkit";
import {showTopMovies, showSearchedMovies, showMovieDetails, showTrendingMovies} from './stateAction'


const stateSlice = createSlice({
    name: "app",
    initialState: {
        loading: false,
        success: false,
        message: '',
        error: false,
        searchedMovie: '',
        topMovies: [],
        searchedMovies: [],
        movieDetails: [],
        trendingMovies: [],
        nav: false,

    },
    reducers: {
        reset: (state) => {
            state.searchedMovie = '';
            state.searchedMovies = [];
            state.movieDetails = [];
        },
        setSearchedMovie: (state, action) => {
            state.searchedMovie = action.payload
        },
        setNav: (state, action) => {
            state.nav = action.payload
        }
    },
    extraReducers: (builder) =>{
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
            state.topMovies = []
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
            state.trendingMovies = [];
        })
        .addCase(showTrendingMovies.pending, (state) => {
            state.loading = true;
        })
        .addCase(showTrendingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.trendingMovies = action.payload;
            state.success = true;
        })
        .addCase(showTrendingMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.trendingMovies = [];
        })
    },
})

export default stateSlice.reducer
export const {reset, setSearchedMovie, setNav} = stateSlice.actions