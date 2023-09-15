import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'display',
    initialState: {
        nav: false,
        searchedMovie: '',
    },
    reducers: {
        setNav: (state, action) => {
            state.nav = action.payload;
        },
        setSearchedMovie: (state, action) => {
            state.searchedMovie = action.payload;
        },
        reset: (state) => {
            state.searchedMovie = ''
        }
    },
})


export default appSlice.reducer;
export const { setNav, setSearchedMovie, reset } = appSlice.actions;