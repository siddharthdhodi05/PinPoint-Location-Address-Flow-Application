import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import LocationPermissionModal from "./components/LocationPermissionModal";
import { useSelector } from "react-redux";
import RouteSearchForm from "./components/RouteSearchForm";
import SaveAddress from "./components/SaveAddress";
import SavedAddresses from "./components/SavedAddresses";

const mapContainerStyle = {
  width: '80%',
  height: '340px',
};

const App = () => {
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const currentLocation =  useSelector((state) => state.search.query);
  const origin = useSelector((state)=>state.route.origin);
  const destination = useSelector((state)=>state.route.destination);
  

  useEffect(() => {
 if (currentLocation) {
      handleSearchAddress(currentLocation);
    }
  
  }, [currentLocation])
  

  useEffect(() => {
        if (origin && destination) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);  // Set the new directions
            // Add origin and destination markers
            const newMarkers = [
              { lat: result.routes[0].legs[0].start_location.lat(), lng: result.routes[0].legs[0].start_location.lng(), color: 'blue' },
              { lat: result.routes[0].legs[0].end_location.lat(), lng: result.routes[0].legs[0].end_location.lng(), color: 'green' },
            ];
            setMarkers(newMarkers);  // Set new markers
          } else {
            alert('Route request failed');
          }
        }
      );
    } else {
      handleSearchAddress(currentLocation);
    }
    
  }, [origin,destination])
  

   const handleSearchAddress = async (query) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        query
      )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      setLocation({ lat, lng });

      // Update markers: add a red pin for the searched address
      setMarkers([{ lat, lng, color: 'red' }]); // Only one red pin for the searched address
    } else {
      alert("Address not found.");
    }
  };



  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "directions"],
  });

  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });

          // Update the marker for the current location
          setMarkers((prevMarkers) => [
            ...prevMarkers,
            { lat: latitude, lng: longitude, color: "blue" }, // Blue marker for current location
          ]);

          // Update recent addresses (Optional)
          // updateRecentAddresses({
          //   address: "Current Location", // You can use dynamic address if available
          //   lat: latitude,
          //   lng: longitude,
          // });
        },
        () => alert("Permission denied or location not available.")
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    setShowPermissionModal(false); // Close the permission modal if open
  };
  return (<>
    <Navbar/>
    
     <LocationPermissionModal
        isOpen={showPermissionModal}
        onClose={() => setShowPermissionModal(false)}
        onEnable={handleEnableLocation}
      />
   <div className="flex flex-col space-y-6">
  {/* Map and Route Search Form */}
  <div className="flex space-x-4 items-start">
    {isLoaded && location && (
      <GoogleMap
        className="shadow-xl rounded-md"
        mapContainerStyle={mapContainerStyle}
        center={location || defaultCenter}
        zoom={15}
      >
        {/* Map markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `http://maps.google.com/mapfiles/ms/icons/${marker.color}-dot.png`,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        ))}

        {/* Directions renderer */}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              suppressMarkers: true,
            }}
          />
        )}
      </GoogleMap>
    )}
    <RouteSearchForm />
    
  </div>
<button type="button" onClick={handleEnableLocation} className=" w-36 ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Locate Me</button>
  {/* Save Address and Saved Addresses */}
  <div className="flex space-x-4 w-full p-6">
      {/* SaveAddress Component */}
      <div className="flex-1">
        <SaveAddress />
      </div>
      {/* SavedAddresses Component */}
      <div className="flex-1">
        <SavedAddresses />
      </div>
    </div>
</div>
</>
  );
};

export default App;
