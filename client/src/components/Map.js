import { makeStyles } from "@material-ui/core";
import { ImLocation2 } from "react-icons/im";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { MapProvider } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
/* import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;
 */

const MapGL = () => {

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZnJhbmNpc2NvZjk0IiwiYSI6ImNsNGFiNTlmbzBibGUzY24ydHhyY3RkM3EifQ.6aFlyNcPIBUQLq7mJYIQyA";
  return (
    <MapProvider>
      <Map
        id="mymap"
        initialViewState={{
          longitude: -57.685241174415374,
          latitude: -36.299932952694,
          zoom: 15,
        }}
        style={{ width: 350, height: 250 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          longitude={-57.685241174415374}
          latitude={-36.299932952694}
          anchor="bottom"
        >
          <ImLocation2 fontSize={35} color="#E23C31" />
        </Marker>
        <NavigationControl />
      </Map>
    </MapProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "250px",
    width: "350px",
    [theme.breakpoints.down("md")]: {
      width: "180px",
    },
  },
}));

export default MapGL;
