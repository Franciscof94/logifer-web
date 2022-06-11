import { makeStyles } from "@material-ui/core";
import { ImLocation2 } from 'react-icons/im'
import Map, { Marker, NavigationControl } from 'react-map-gl';
import {MapProvider} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const MapGL = () => {
  const classes = useStyles()
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiZnJhbmNpc2NvZjk0IiwiYSI6ImNsNDl2bjZ1aDA1b2czYnBxaDZhZjdhcHAifQ.B-6IzqyCb3phLpJQzy3G4Q'
  return (
    <MapProvider>
       <Map
      id="mymap"
      initialViewState={{
        longitude: -57.685241174415374,
        latitude: -36.299932952694,
        zoom: 15
      }}
      style={{width: 350, height: 250}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
    <Marker longitude={-57.685241174415374} latitude={-36.299932952694} anchor="bottom" >
      <ImLocation2 fontSize={35} color='#E23C31'/>
    </Marker>
    <NavigationControl />
    </Map>
    </MapProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: { 
    height: '250px',
    width: '350px',
    [theme.breakpoints.down('md')]: {
      width: '180px',
    },
  }
}))

export default MapGL