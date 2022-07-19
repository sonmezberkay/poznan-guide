import classes from "./Events.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";


const EventItem = (props) => {
  return (
    <li className={classes["event-list-item"]}>
      <div className={classes["left-container"]}>
        <img src={props.photo} alt="eventPhoto" />
      </div>
      <div className={classes["right-container"]}>
        <div className={classes["event-details"]}>
          <h2>{props.name}</h2>
          <div className={classes["event-info"]}>
            <p><FontAwesomeIcon className={classes.clock} icon={faCalendar} />{props.date}</p>
            <p><FontAwesomeIcon className={classes.clock} icon={faClock} />{props.time}</p>
          </div>
          <address><FontAwesomeIcon className={classes.pin} icon={faLocationPin} />{props.location}</address>
        </div>
        <div className={classes.price}>
          <h3>{props.price}</h3>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
