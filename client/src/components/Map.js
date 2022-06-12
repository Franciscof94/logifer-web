import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { makeStyles } from '@material-ui/styles';
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNpc2NvZjk0IiwiYSI6ImNsNDl2bjZ1aDA1b2czYnBxaDZhZjdhcHAifQ.B-6IzqyCb3phLpJQzy3G4Q';

export default function MapGL() {
  const classes = useStyles()
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-57.685241174415374);
  const [lat, setLat] = useState(-36.299932952694);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
  });

  useEffect(() => {
    if (!map.current) return; 
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className={classes.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "350px",
    width: "350px"
  },
  sidebar: {
    backgroundColor: "rgba(35, 55, 75, 0.9)",
color: "#fff",
padding: "6px 12px",
fontFamily: "monospace",
zIndex: "1",
position: "absolute",
top: 0,
left: 0,
margin: "12px",
borderRadius: "4px",
  }
}))