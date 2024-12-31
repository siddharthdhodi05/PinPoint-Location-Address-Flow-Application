// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import routeReducer from './routeSlice'; // Import the new route slice

const store = configureStore({
  reducer: {
    search: searchReducer,
    route: routeReducer, // Add route reducer to the store
  },
});

export default store;
