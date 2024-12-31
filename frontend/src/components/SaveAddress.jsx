import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAddresses } from '../Redux/addressSlice.js';

const SaveAddress = () => {
  const [houseStreet, setHouseStreet] = useState('');
  const [city, setCity] = useState('');
  const [addressType, setAddressType] = useState('');
  const [addressId, setAddressId] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // Handle address form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!houseStreet || !city || !addressType) {
      setError('All fields are required!');
      return;
    }

    const addressData = { houseStreet, city, addressType };

    try {
      const response = await axios.post('http://localhost:5003/api/v1/address/save', addressData);

      if (response.data && response.data.length > 0) {
        const savedAddress = response.data[0]; // Get the first address from the response
        setAddressId(savedAddress._id);
        setHouseStreet('');
        setCity('');
        setAddressType('');
        setError(null);

        // Fetch the updated list of addresses after saving a new one
        const updatedAddressesResponse = await axios.get('http://localhost:5003/api/v1/address/list');
        dispatch(setAddresses(updatedAddressesResponse.data)); // Update Redux store

        console.log('Address Saved:', savedAddress);
      } else {
        setError('Failed to save address.');
      }
    } catch (error) {
      console.error('Error saving address:', error.response ? error.response.data : error);
      setError('Error saving address. Please try again.');
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Save Your Address</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="houseStreet" className="block text-lg font-medium text-gray-700">House/Street</label>
          <input
            type="text"
            id="houseStreet"
            value={houseStreet}
            onChange={(e) => setHouseStreet(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your house/street"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your city"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Address Type</label>
          <div className="space-y-4 space-x-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="addressType"
                value="home"
                checked={addressType === 'home'}
                onChange={(e) => setAddressType(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Home</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="addressType"
                value="office"
                checked={addressType === 'office'}
                onChange={(e) => setAddressType(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Office</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="addressType"
                value="family"
                checked={addressType === 'family'}
                onChange={(e) => setAddressType(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Family</span>
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Address
          </button>
        </div>
      </form>

      {addressId && (
        <div className="mt-4 text-green-500">
          Address saved successfully! Address ID: {addressId}
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default SaveAddress;
