import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapaStatic({ latitude, longitude }) {
  return (
    <MapContainer center={[latitude, longitude]} zoom={14.75} style={{ height: "400px", width: "75%" }}>
      <TileLayer
        url={`https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=3c70e5435a524a48a547fb9bc4ce5a4e`}
        attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a> contributors'
        maxZoom={22}
      />
      <Marker position={[latitude, longitude]}>
      </Marker>
    </MapContainer>
  );
}

export default MapaStatic;
