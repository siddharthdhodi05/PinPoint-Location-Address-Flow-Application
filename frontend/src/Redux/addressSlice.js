// redux/slices/addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [],  // Initialize as an empty array to hold multiple addresses
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddresses: (state, action) => {
      state.addresses = action.payload;  // Set fetched addresses
    },
    clearAddresses: (state) => {
      state.addresses = [];  // Clear addresses
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter((address) => address._id !== action.payload);  // Remove address by _id
    },
  },
});

export const { setAddresses, clearAddresses, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
