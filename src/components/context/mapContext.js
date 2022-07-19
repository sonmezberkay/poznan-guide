import { createContext, useState } from "react";


const MapContext = createContext({
    mapLocationFillHandler: (location) => {},
    mapLocation: {},
});


export const MapContextProvider = ({children}) => {

    const [mapLocation, setMapLocation] = useState({});

    const mapLocationFillHandler = (location) => {
        setMapLocation(location);
    };

    const mapContextValue = {
        mapLocationFillHandler,
        mapLocation,
    }

    return (
        <MapContext.Provider value={mapContextValue}>
            {children}
        </MapContext.Provider>
    )
};


export default MapContext;