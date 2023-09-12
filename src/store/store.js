import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./stateSlice";

const store = configureStore({
    reducer: {
        app: stateReducer,
    }
})

export default store;