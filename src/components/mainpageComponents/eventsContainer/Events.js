import classes from './Events.module.css'
import EventsList from './EventsList';
import { eventData } from './eventData'

const Events = () => {

    

    return (
        <div className={classes.events}>
            <EventsList events={eventData} />
        </div>
    )
};

export default Events;