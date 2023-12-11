import React from "react";
import { GoogleMap, Marker,  LatLng } from "@types/google.maps";


export default function CustomGoogle(){
    <GoogleMap
    mapContainerClassName="map-container"
    center={center}
    zoom={10}
  >
    <Marker
      position={{ lat: 6.270932528366708, lng: -75.57752374552615 }}
    />
  </GoogleMap>
};