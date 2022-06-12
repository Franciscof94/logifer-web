import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { makeStyles } from '@material-ui/styles';
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNpc2NvZjk0IiwiYSI6ImNsNGFiNTlmbzBibGUzY24ydHhyY3RkM3EifQ.6aFlyNcPIBUQLq7mJYIQyA';

export default function MapGL() {
  const classes = useStyles()
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
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
    height: "400px"
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