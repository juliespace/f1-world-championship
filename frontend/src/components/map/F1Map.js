import React, { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './F1Map.css';
import Filter from './Filter.js';

class F1Map extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 0 }}>
        <Filter />
        <MapContainer center={[37.98381, 23.727539]} zoom={3}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    );
  }
}

export default F1Map;
