// components/LocationPermissionModal.jsx
const LocationPermissionModal = ({ isOpen, onClose, onEnable }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <p>Do you want to use your current location?</p>
        <div className="flex gap-4 mt-4">
          <button onClick={onEnable} className="bg-blue-500 text-white px-4 py-2 rounded">
            Allow
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPermissionModal; // <-- Default export
