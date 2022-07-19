import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import Backdrop from "./components/Backdrop";

import { useContext, useState, useEffect } from 'react';
import BackdropContext from "./components/context/BackdropContext";
import Menu from './components/placesComponent/menu/Menu';
import MapContainer from "./components/placesComponent/map/MapContainer";
import WhereToSeePage from "./pages/WhereToSeePage";
import AboutPage from "./pages/AboutPage";

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/menus").then((response) => {
      if(!response.ok) {
        throw new Error ("Couldn't fetch the data!");
      }
      response.json().then((data) => {
        setData(data);
        setIsLoading(false);
      });
    }).catch((err) => {
      
      setError(err.message);
    });
  }, []);

  
  const backdropCtx = useContext(BackdropContext);
  const backdropIsOn = backdropCtx.backdropIsOn;

  const menuIsOn = backdropCtx.menuIsOn;
  const mapIsOn = backdropCtx.mapIsOn;



  return (
    <div className="App">
      <Navbar />
      {backdropIsOn && <Backdrop />}
      {menuIsOn && <Menu data={data} />}
      {mapIsOn && <MapContainer data={data} />}
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/restaurants">
          <RestaurantsPage data={data} isLoading={isLoading} error={error} />
        </Route>
        <Route path="/wheretosee/:id">
          <WhereToSeePage />
        </Route>
        <Route path="/city">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;