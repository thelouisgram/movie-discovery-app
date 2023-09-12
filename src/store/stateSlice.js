import { createSlice } from "@reduxjs/toolkit";
import {showTopMovies} from './stateAction'

const stateSlice = createSlice({
    name: "app",
    initialState: {
        loading: false,
        success: false,
        message: '',
        error: false,
        topMovies: []
    },
    reducers: {

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
    },
})

export default stateSlice.reducer