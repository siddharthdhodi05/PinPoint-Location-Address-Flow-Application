import React, { useState } from 'react';

const SaveAddress = () => {
  const [houseStreet, setHouseStreet] = useState('');
  const [city, setCity] = useState('');
  const [addressType, setAddressType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = {
      houseStreet,
      city,
      addressType,
    };
    console.log('Address Saved:', addressData);
    // Reset form after submission (optional)
    setHouseStreet('');
    setCity('');
    setAddressType('');
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
              <span className="ml-2 text-gray-700">Family&Family</span>
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
    </div>
  );
};

export default SaveAddress;
