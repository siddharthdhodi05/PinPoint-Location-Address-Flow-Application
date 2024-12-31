import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination, clearRoute } from "../Redux/routeSlice";

const RouteSearchForm = () => {
  const [localOrigin, setLocalOrigin] = useState("");
  const [localDestination, setLocalDestination] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (localOrigin && localDestination) {
      dispatch(setOrigin(localOrigin));  // Dispatch origin to Redux store
      dispatch(setDestination(localDestination));  // Dispatch destination to Redux store
    } else {
      alert("Please enter both origin and destination.");
    }
  };

  const handleClear = () => {
    setLocalOrigin("");
    setLocalDestination("");
    dispatch(clearRoute()); // Clear origin and destination in Redux store
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Find a Route</h2>
      <form onSubmit={handleSearch} className="space-y-6">
      
        <div>
          <input
            id="origin"
            type="text"
            value={localOrigin}
            onChange={(e) => setLocalOrigin(e.target.value)}
            placeholder="Enter origin"
            className="w-full font-bold text-zinc-950 px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            id="destination"
            type="text"
            value={localDestination}
            onChange={(e) => setLocalDestination(e.target.value)}
            placeholder="Enter destination"
            className="w-full font-bold text-zinc-950 px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex  space-x-4">
          <button
            type="submit"
            className="w-32 py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search Route
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-32 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear Route
          </button>
        </div>
      </form>
    </div>
  );
};

export default RouteSearchForm;
