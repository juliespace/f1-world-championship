import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './F1Map.css';
import RoundSelector from './RoundSelector';
import Round from './Round';

class F1Map extends Component {
  state = {
    yearFilter: '2010',
    years: [],
    map: null,
    tileLayer: null,
    geojsonLayer: null,
    geojson: null,
  };

  constructor(props) {
    super(props);
    this.mapElement = null;
    this.onEachFeature = this.onEachFeature.bind(this);
    this.pointToLayer = this.pointToLayer.bind(this);
    this.filterFeatures = this.filterFeatures.bind(this);
    this.newGeoJSONLayer = this.newGeoJSONLayer.bind(this);
    this.updateGeoJSONLayer = this.updateGeoJSONLayer.bind(this);
    this.updateFeatures = this.updateFeatures.bind(this);
  }

  componentDidMount = () => {
    if (!this.state.map) {
      Promise.all([
        fetch('http://localhost:8000/f1/map/years').then((r) => r.json()),
        fetch(`http://localhost:8000/f1/map/rounds/features`).then((r) =>
          r.json()
        ),
      ]).then(([years, geojson]) => {
        this.setState({ years, geojson });
      });
      this.newMap();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      this.newGeoJSONLayer(this.state.geojson);
    }

    if (this.state.yearFilter !== prevState.yearFilter) {
      this.updateGeoJSONLayer();
    }
  };

  componentWillUnmount = () => {
    this.state.map.remove();
  };

  updateFeatures = (e) => {
    this.setState({ yearFilter: e.target.value });
  };

  newGeoJSONLayer = () => {
    const geojsonLayer = L.geoJson(this.state.geojson, {
      onEachFeature: this.onEachFeature,
      pointToLayer: this.pointToLayer,
      filter: this.filterFeatures,
    });
    geojsonLayer.addTo(this.state.map);
    this.setState({ geojsonLayer });
    this.fitBounds(geojsonLayer);
  };

  updateGeoJSONLayer = () => {
    const geojsonLayer = this.state.geojsonLayer;
    geojsonLayer.clearLayers();
    geojsonLayer.addData(this.state.geojson);
    this.fitBounds(geojsonLayer);
  };

  fitBounds = (geojsonLayer) => {
    this.state.map.fitBounds(geojsonLayer.getBounds(), {
      paddingTopLeft: [200, 10],
      paddingBottomRight: [10, 10],
    });
  };

  filterFeatures = (feature, layer) => {
    return feature.properties.time.indexOf(this.state.yearFilter) === 0;
  };

  pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.8,
      fillColor: 'purple',
      radius: 10,
    });
  };

  onEachFeature = (feature, layer) => {
    layer.bindPopup(
      ReactDOMServer.renderToString(<Round {...feature.properties} />)
    );
  };

  newMap = () => {
    const map = L.map(this.mapElement, {
      minZoom: 3,
      zoom: 3,
      attributionControl: true,
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

    this.setState({ map, tileLayer });
  };

  render = () => {
    console.log('render');
    return (
      <div id='f1map'>
        <RoundSelector
          years={this.state.years}
          yearFilter={this.state.yearFilter}
          onUpdate={this.updateFeatures}
        />
        <div ref={(node) => (this.mapElement = node)} id='map' />
      </div>
    );
  };
}

export default F1Map;
