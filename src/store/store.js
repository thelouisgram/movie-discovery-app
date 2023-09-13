import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./stateSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    app: stateReducer, // Use the stateReducer for the 'app' slice
  },
});

export default store;

// Document the Redux store configuration
