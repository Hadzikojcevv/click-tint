"use client"
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from 'leaflet';

type MapProps = {
    locations: any[]
}

const customIcon = new L.Icon({
    iconUrl: `https://i.imgur.com/QtPeG4F.png`,
    iconSize: [25, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

const Map = ({locations}: MapProps) => {
    const center = [0, 0]; // Set the initial center of the map

    return (
      <MapContainer center={[42.8452, 22.4997]}  zoom={7} style={{ height: '600px', width: '100%' }} className='z-10'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        {locations.map((location: any, index: any) => (
          <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
            <Popup> 
                {location.name} <br /> {location.city} <br /> {location.phone}
                </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
}

export default Map