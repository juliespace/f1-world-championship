import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import './F1Map.css';
import RoundSelector from './RoundSelector';
import Round from './Round';

const defaultSelections = {time: '-', winnerCitizenship: '-', winnerName: '-'};

class F1Map extends Component {
  state = {
    filters: [],
    selections: {...defaultSelections},
    map: null,
    tileLayer: null,
    geojsonLayer: null,
    geojson: null,
  };

  render() {
    return (
      <div id='f1map'>
        <RoundSelector
          filters={this.state.filters}
          selections={this.state.selections}
          onUpdate={this.updateFeatures}
        />
        <div id='leaflet' />
      </div>
    );
  }
  
  componentDidMount() {
    if (!this.state.map) {
      Promise.all([
        fetch(`http://localhost:8000/f1/map/rounds/filters`).then((r) => r.json()),
        fetch(`http://localhost:8000/f1/map/rounds/features`).then((r) => r.json()),
      ]).then(([filters, geojson]) => {
        this.setState({ filters, geojson, ...this.newMap()});
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      this.newGeoJSONLayer();
    }

    if (this.state.selections !== prevState.selections) {
      this.newGeoJSONLayer();
    }
  };

  componentWillUnmount() {
    if (this.state.map)
      this.state.map.remove();
  };

  updateFeatures = (e) => {
    let newSelections = {...defaultSelections};
    newSelections[e.target.name] = e.target.value;
    this.setState({ selections: newSelections });
  };

  newGeoJSONLayer = () => {
    if (this.state.geojsonLayer)
      this.state.map.removeLayer(this.state.geojsonLayer);
    const geojsonLayer = L.markerClusterGroup();
    this.state.geojson.features.forEach(feature => {
      if (this.filterFeatures(feature, geojsonLayer)) {
        const coordinates = feature.geometry.coordinates;
        const latlng = new L.latLng(coordinates[1], coordinates[0]);
        const marker = this.pointToLayer(feature, latlng);
        this.onEachFeature(feature, marker);
        marker.addTo(geojsonLayer);
      }
    });
    geojsonLayer.addTo(this.state.map);
    this.setState({ geojsonLayer });
    this.fitBounds(geojsonLayer);
  };

  fitBounds = (geojsonLayer) => {
    if (geojsonLayer.getBounds()._northEast) {
      this.state.map.fitBounds(geojsonLayer.getBounds(), {
        paddingTopLeft: [10, 10],
        paddingBottomRight: [10, 10],
      });
    }
  };

  filterFeatures = (feature, layer) => {
    // return feature.properties.time.indexOf(this.state.yearFilter) === 0;
    // return feature.properties.country === 'Italy';
    for (const p in this.state.selections) {
      const val = this.state.selections[p];
      if (val !== '-' && feature.properties[p].indexOf(val) !== 0)
        return false;
    }
    return true;
  };

  pointToLayer = (feature, latlng) => {
    const icon = L.AwesomeMarkers.icon({icon: 'flag', prefix: 'fa'});
    const markerOptions = {
      icon: icon,
      title: feature.properties.circuit,
      clickable: true,
      draggable: false
    };
    return L.marker(latlng, markerOptions);
  };

  onEachFeature = (feature, layer) => {
    layer.bindPopup(
      ReactDOMServer.renderToString(<Round {...feature.properties} />)
    );
  };

  newMap = () => {
    const map = L.map('leaflet', {
      minZoom: 3,
      zoom: 3
    });

    const tileLayer = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      //'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      {
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      }
    ).addTo(map);

    return { map, tileLayer };
  };
}

export default F1Map;
