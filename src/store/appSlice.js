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
    },
})


export default appSlice.reducer;
export const { setNav, setSearchedMovie } = appSlice.actions;