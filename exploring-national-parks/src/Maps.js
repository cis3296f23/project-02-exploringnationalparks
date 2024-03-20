import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Maps(){
  const defaultProps = {
    center: {
      lat: 39.9812,
      lng: -75.1554
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={39.9812}
          lng={-75.1554}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}