import WhereToSeeItem from './WhereToSeeItem';
import classes from './WhereToSee.module.css';


const WhereToSeeList = (props) => {


    return (
        <ul className={classes['places-list']}>
            {props.places.map(place => (
                <WhereToSeeItem
                key={place.id}
                name={place.name}
                location={place.location}
                description={place.description}
                photo={place.photos}
                 />
            ))}
        </ul>
    )
};

export default WhereToSeeList;