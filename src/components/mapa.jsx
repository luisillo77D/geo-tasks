import { useState,useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mapa({ setCoordinates }) {
  const [markerPosition, setMarkerPosition] = useState(null);

  const initialPosition = { lat: 29.379933688073205, lng: -110.905272304 };
  useEffect(() => {
    setMarkerPosition(initialPosition);
    setCoordinates(initialPosition);
  }, []);

  const handleClick = (e) => {
    setMarkerPosition(e.latlng);
    setCoordinates(e.latlng); // Envía las coordenadas al formulario
    console.log(e.latlng);
  };

  const MapClickHandler = () => {
    const map = useMapEvents({
      click: handleClick,
    });
    return null;
  };

  return (
    <MapContainer center={[initialPosition.lat,initialPosition.lng]} zoom={8.75} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={API_KEY}"
        attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a> contributors'
        maxZoom={22}
        API_KEY="3c70e5435a524a48a547fb9bc4ce5a4e"
      />
      <MapClickHandler />
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>
            <span>
              Latitude: {markerPosition.lat}
              <br />
              Longitude: {markerPosition.lng}
            </span>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Mapa;
