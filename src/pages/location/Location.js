import React from 'react';
import {Map, TileLayer, Marker, Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Grid} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import {intro} from '../location/Data';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Location = () => {

  const position = [35.94333, -75.62283];
  const zoom = 15;

  return (
    <Grid
      celled='internally'
    >

      {/*  Intro section of the page  */}
      <Grid.Row>
        <TopIntro
          {...intro}
        />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column
          width={3}
        >
          {/*  map data display  */}

        </Grid.Column
        >

        <Grid.Column
          width={13}
        >
          {/*  map display  */}
          <Map
            style={{
              height: '700px',
              width: '96%',
              margin: '0 auto'
            }}
            center={position}
            zoom={zoom}
          >
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                SGOBX
              </Tooltip>
            </Marker>
          </Map>
        </Grid.Column>
      </Grid.Row>

      {/*<Grid.Row>*/}
        {/*<LocTest/>*/}
      {/*</Grid.Row>*/}

    </Grid>
  );
};

export default Location;