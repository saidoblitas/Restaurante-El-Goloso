import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './NuestrasCasasPage.css';

const customIconAlfonso = new L.Icon({
  iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png", // Ruta al primer icono personalizado
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const customIconLaVictoria = new L.Icon({
  iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const NuestrasCasas = () => {
  return (
    <div className="map-container">
      <h1 className="title">Nuestras Casas - Chiclayo</h1>
      <div className="map-wrapper">
        <MapContainer
          center={[-6.766013, -79.841011]}
          zoom={14}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={[-6.766013, -79.841011]} icon={customIconAlfonso}>
            <Popup>
              Alfonso Ugarte 1427
            </Popup>
          </Marker>

          <Marker position={[-6.789153, -79.843735]} icon={customIconLaVictoria}>
            <Popup>
              Local La Victoria - Av. los Incas 145
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default NuestrasCasas;
