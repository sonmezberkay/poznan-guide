import RestaurantsItem from './RestaurantItem';
import classes from './Restaurants.module.css';


const RestaurantsList = (props) => {


    return (
        <ul className={classes['restaurants-list']}>
            {props.restaurants.map(restaurant => (
                <RestaurantsItem
                key={restaurant.id}
                name={restaurant.restaurantName}
                address={restaurant.address}
                location={restaurant.location}
                points={restaurant.points}
                price={restaurant.price}
                photo={restaurant.photo}
                menu={restaurant.menu}
                 />
            ))}
        </ul>
    )
};

export default RestaurantsList;