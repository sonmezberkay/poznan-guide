import classes from "./Restaurants.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

import { useContext } from "react";
import BackdropContext from "../../context/BackdropContext";
import MenuContext from "../../context/menuContext";
import MapContext from "../../context/mapContext";

const RestaurantsItem = (props) => {

  const backdropCtx = useContext(BackdropContext);
  const menuCtx = useContext(MenuContext);
  const mapCtx = useContext(MapContext);
  

  const showMenuHandler = () => {
    backdropCtx.menuOnHandler();
    backdropCtx.backdropToggle();
    menuCtx.menuContentFillHandler(props.menu, props.name);
    console.log(props.menu);
  };

  const showMapHandler = () => {
    backdropCtx.mapOnHandler();
    backdropCtx.backdropToggle();
    mapCtx.mapLocationFillHandler(props.location);
  };
  

  return (
    <Fragment>
      <li className={classes["restaurant-list-item"]}>
        <div className={classes["left-container"]}>
          <img src={props.photo} alt="img" />
        </div>
        <div className={classes["info"]}>
          <div className={classes["middle-container"]}>
            <h2>{props.name}</h2>
            <address>
              <FontAwesomeIcon className={classes.pin} icon={faLocationPin} />
              {props.address}
            </address>
            <h3>{props.price}</h3>
            <h3>{props.points}</h3>
          </div>
          <div className={classes["right-container"]}>
            <button onClick={showMenuHandler}>Menu</button>
            <button onClick={showMapHandler}>Location</button>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default RestaurantsItem;
