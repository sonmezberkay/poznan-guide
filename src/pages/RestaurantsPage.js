import classes from './RestaurantsPage.module.css';
import Restaurants from '../components/placesComponent/restaurants/Restaurants';


const RestaurantsPage = ({data, isLoading, error}) => {

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                    <Restaurants data={data} isLoading={isLoading} error={error} />
            </div>
        </div>
    )
};

export default RestaurantsPage;