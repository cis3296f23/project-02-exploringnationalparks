import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ParkMap = ({ latitude, longitude }) => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };

  return (
    <LoadScript googleMapsApiKey="API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default ParkMap;