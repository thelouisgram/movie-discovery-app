import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./stateSlice";
import displayReducer from './appSlice'

// Configure the Redux store
const store = configureStore({
  reducer: {
    app: stateReducer, // Use the stateReducer for the 'app' slice
    display: displayReducer,
  },
});

export default store;

// Document the Redux store configuration
