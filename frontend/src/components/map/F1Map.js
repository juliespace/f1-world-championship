import React, { Component } from 'react';
import Axios from 'axios';
import Leaflet, { latLng, tileLayer } from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import './F1Map.css';

export class F1Map extends Component {
  state = {
    mapContainer: null,
    tileLayer: null,
    geojsonLayer: null,
    geojson: null,
    yearSelected: '2010',
    years: [],
  };

  config = {
    params: {
      zoomControl: false,
      zoom: 2,
      maxZoom: 18,
      minZoom: 2,
      scrollwheel: false,
      legends: true,
      infoControl: false,
      attributionControl: true,
    },
    tileLayer: {
      uri: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      params: {
        minZoom: 2,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        id: '',
        accessToken: '',
      },
    },
  };

  init = (id) => {
    const map = Leaflet.map(id, config.params);

    const tileLayer = Leaflet.tileLayer(
      config.tileLayer.uri,
      config.tileLayer.params
    ).addTo(map);

    this.setState({ mapContainer: map, tileLayer: tileLayer });
  };

  searchYears = async () => {
    const res = await Axios.get('http://localhost:8000/f1/map/years');
    this.setState({ years: res });
  };

  searchFeatureCollections = async () => {
    const res = await Axios.get('http://localhost:8000/f1/map/rounds/features');
    this.setState({ geojson: res });

    if (!this.state.mapContainer) {
      this.init(this._mapNode);
    }
  };

  newGeojsonLayer = () => {
    const layer = Leaflet.geoJSON(this.state.geojson, {
      onEachFeature: this.onEachFeature,
      pointToLayer: this.pointToLayer,
      filter: this.filter,
    });

    layer.addTo(this.state.map);
    this.setState({ geojsonLayer: layer });
  };

  onEachFeature = (feature, layer) => {
    layer.bindPopup();
  };

  pointToLayer = (feature, latLng) => {
    const marker = {
      radius: 10,
      fillColor: 'purple',
      fillOpacity: 0.4,
    };

    return Leaflet.circleMarker(latlng, marker);
  };

  filter = (feature, layer) => {
    return feature.properties.time.indexOf(this.state.yearFilter) === 0;
  };

  updateGeojsonLayer = () => {};

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.geojson &&
      this.state.mapContainer &&
      !this.state.geojsonLayer
    ) {
      this.newGeojsonLayer();
    }

    if (this.state.yearSelected !== prevState.yearSelected) {
      this.updateGeojsonLayer();
    }
  }

  componentWillUnmount() {
    this.setState({ mapContainer: null });
  }

  render() {
    return (
      <div
        ref={(node) => {
          this._mapNode = node;
        }}
        id='map'
      ></div>
    );
  }
}

export default F1Map;
