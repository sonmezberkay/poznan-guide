import { createContext, useState } from "react";


const BackdropContext = createContext({
    backdropToggle: () => {},
    backdropIsOn: false,
    menuOnHandler: () => {},
    menuIsOn: false,
    mapOnHandler: () => {},
    mapIsOn: false
});


export const BackdropContextProvider = ({children}) => {

    const [backdropIsOn, setBackdropIsOn] = useState(false);
    const [menuIsOn, setMenuIsOn] = useState(false);
    const [mapIsOn, setMapIsOn] = useState(false);

    const backdropToggleHandler = (prevState) => {
        setBackdropIsOn(prevState => !prevState);
        if (menuIsOn) {
            setMenuIsOn(false);
        }
        if (mapIsOn) {
            setMapIsOn(false);
        }
    };

    const menuOnHandler = () => {
        setMenuIsOn(true);
    };

    const mapOnHandler = () => {
        setMapIsOn(true);
    };

    const backdropContextValue = {
        backdropIsOn: backdropIsOn,
        backdropToggle: backdropToggleHandler,
        menuIsOn: menuIsOn,
        menuOnHandler: menuOnHandler,
        mapIsOn: mapIsOn,
        mapOnHandler: mapOnHandler
    }

    return (
        <BackdropContext.Provider value={backdropContextValue}>
            {children}
        </BackdropContext.Provider>
    )
};


export default BackdropContext;