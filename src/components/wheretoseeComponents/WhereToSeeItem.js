import classes from "./WhereToSee.module.css";
import { Fragment, useState } from "react";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";
import BackdropContext from "../context/BackdropContext";
import MapContext from "../context/mapContext";


const WhereToSeeItem = (props) => {

  const backdropCtx = useContext(BackdropContext);
  const mapCtx = useContext(MapContext);
  

  const showMapHandler = () => {
    backdropCtx.mapOnHandler();
    backdropCtx.backdropToggle();
    mapCtx.mapLocationFillHandler(props.location);
  };


  const [imageIndex, setImageIndex] = useState(0);
    
    
  const imageIncreaseHandler = () => {
      if (imageIndex <= props.photo.length) {
          setImageIndex(prevIndex => prevIndex + 1);
      } if (imageIndex === props.photo.length - 1) {
          setImageIndex(0);
      }
  };

  const imageDecreaseHandler = () => {
      if (imageIndex > 0) {
          setImageIndex(prevIndex => prevIndex - 1);
      } if (imageIndex === 0) {
          setImageIndex(props.photo.length - 1);
      }
  
}

  return (

    <Fragment>
      <li className={classes["places-list-item"]}>
        <div className={classes["left-container"]}>
          <img src={props.photo[imageIndex]} alt="img" />
          <FontAwesomeIcon className={classes['left-arrow']} icon={faArrowAltCircleLeft} onClick={imageDecreaseHandler} />
          <FontAwesomeIcon className={classes['right-arrow']} icon={faArrowAltCircleRight} onClick={imageIncreaseHandler} />
        </div>
        <div className={classes["info"]}>
          <div className={classes["middle-container"]}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>
          <div className={classes["right-container"]}>
            <button onClick={showMapHandler}>Location</button>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default WhereToSeeItem;