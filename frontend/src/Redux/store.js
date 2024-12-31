// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import routeReducer from './routeSlice'; // Import the new route slice
import authenticatedReducer from './authenticatedSlice'; // Renamed to authSlice

const store = configureStore({
  reducer: {
    search: searchReducer,
    route: routeReducer,
    login: authenticatedReducer,
  },
});

export default store;
