import Map from "./Map";
import classes from './Map.module.css';

import { useContext } from "react";
import MapContext from "../../context/mapContext";



const MapContainer = () => {
    
    const mapCtx = useContext(MapContext);
    const restaurantCoordinates = mapCtx.mapLocation;
    
    
  return (
    <div className={classes['map-container']}>
        <Map mapCenter={restaurantCoordinates} />
    </div>
  );
};

export default MapContainer;