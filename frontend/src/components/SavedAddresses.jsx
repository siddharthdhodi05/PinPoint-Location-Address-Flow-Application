import React from "react";

const SavedAddresses = () => {
  // Dummy data for saved addresses
  const addresses = [
    { id: 1, type: "Home", address: "123 Main Street, Springfield" },
    { id: 2, type: "Office", address: "456 Elm Avenue, Metropolis" },
    { id: 3, type: "Family", address: "789 Maple Drive, Gotham" },
    { id: 4, type: "Friends", address: "101 Oak Lane, Star City" },
  ];

  return (
    <div className="w-full p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
      <ul className="space-y-4">
        {addresses.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-3 border rounded-md bg-gray-50 hover:bg-gray-100"
          >
            <div>
              <p className="font-medium text-gray-800">{item.type}</p>
              <p className="text-sm text-gray-600">{item.address}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700 font-semibold">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700 font-semibold">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedAddresses;
