// src/Redux/routeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: '',
  destination: '',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    clearRoute: (state) => {
      state.origin = '';
      state.destination = '';
    },
  },
});

export const { setOrigin, setDestination, clearRoute } = routeSlice.actions;
export default routeSlice.reducer;
 