// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import routeReducer from './routeSlice'; // Import the new route slice
import authenticatedReducer from './authenticatedSlice'; // Renamed to authSlice
import addressReducer from './addressSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    route: routeReducer,
    login: authenticatedReducer,
    address: addressReducer
  },
});

export default store;
