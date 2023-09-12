import { createSlice } from "@reduxjs/toolkit";
import {showTopMovies, showSearchedMovies} from './stateAction'

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
    },
    reducers: {
        reset: (state) => {
            state.searchedMovie = ''
        },
        setSearchedMovie: (state, action) => {
            state.searchedMovie = action.payload
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
            state.searchedMovies = []
        })
    },
})

export default stateSlice.reducer
export const {reset, setSearchedMovie} = stateSlice.actions