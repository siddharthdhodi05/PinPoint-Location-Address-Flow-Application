import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAddresses, removeAddress } from "../Redux/addressSlice.js";

const SavedAddresses = () => {
  const dispatch = useDispatch();
  const savedAddress = useSelector((state) => state.address.addresses); // Access addresses from Redux store
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch saved addresses from backend
    const fetchSavedAddresses = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/v1/address/get'); // Corrected endpoint
        const fetchedAddresses = response.data;  // Adjusted for response
        if (Array.isArray(fetchedAddresses)) {
          dispatch(setAddresses(fetchedAddresses));  // Dispatch to Redux store
        } else {
          setError("Invalid data format for addresses");
        }
      } catch (err) {
        setError("Failed to fetch addresses");
        console.error("Error fetching addresses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedAddresses();
  }, [dispatch]);

  // Handle delete address
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5003/api/v1/address/delete/${id}`); // Adjust DELETE endpoint
      dispatch(removeAddress(id));  // Dispatch to Redux to remove the address
    } catch (err) {
      setError("Failed to delete address");
      console.error("Error deleting address:", err);
    }
  };

  return (
    <div className="w-full p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
      {loading && <p>Loading addresses...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="max-h-96 overflow-y-auto"> {/* Make the component scrollable */}
        <ul className="space-y-4">
          {/* Check if savedAddress is an array before mapping */}
          {Array.isArray(savedAddress) && savedAddress.length > 0 ? (
            savedAddress.map((item) => (
              <li
                key={item._id} // Use _id as key
                className="flex items-center justify-between p-3 border rounded-md bg-gray-50 hover:bg-gray-100"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.addressType}</p> {/* Display addressType */}
                  <p className="text-sm text-gray-600">{item.houseStreet}, {item.city}</p> {/* Display houseStreet and city */}
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-red-500 hover:text-red-700 font-semibold"
                    onClick={() => handleDelete(item._id)} // Delete by _id
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No saved addresses found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SavedAddresses;
