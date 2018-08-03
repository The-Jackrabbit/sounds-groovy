import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './Location.css';
import clouds from '../../resources/images/0621181945l.png';


const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [35.9574, 75.6241];
const zoomLevel = 12;

const Location = () => {
  return (
    <div className="location">
      <img className="location-img" alt="location-img" src={clouds} />
      <h2 align='center'>
        Where are we!?!
      </h2>
      <p>
        Sounds Groovy OBX is located in ...
      </p>


      <div className="mapid">
        <Map
          center={mapCenter}
          zoom={zoomLevel}
        >
          <TileLayer
            attribution={stamenTonerAttr}
            url={stamenTonerTiles}
          />
        </Map>
      </div>

    </div>
  );
};

export default Location;