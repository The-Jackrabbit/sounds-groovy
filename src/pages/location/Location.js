import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import './Location.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Location = () => {

  const position = [35.94333, -75.62283];
  const zoom = 13;

  return (
    <div className="location-view standard">
      <div className="select-area">
      </div>
      <div className="map-area">
        <Map center={position} zoom={zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Vacation Rental<br/>Sounds Groovy OBX
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default Location;