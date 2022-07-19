import classes from './Events.module.css'
import EventItem from './EventItem';

const EventsList = (props) => {


    return (
        <ul className={classes['event-list']}>
            <li className={classes['event-list-header']}>
                <h2>Upcoming Events...</h2>
            </li>
            {props.events.map(event => (
                <EventItem
                    key={event.id}
                    name={event.eventName}
                    date={event.date}
                    location={event.location}
                    time={event.time}
                    price={event.price}
                    photo={event.photo}
                />
            ))}
        </ul>
    )
};

export default EventsList;