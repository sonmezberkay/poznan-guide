import ErrorModal from "../../ui/ErrorModal";
import LoadingSpinner from "../../ui/LoadingSpinner";
import classes from "./Restaurants.module.css";
import RestaurantsList from "./RestaurantsList";

const Restaurants = ({ data, isLoading, error }) => {
  let content;
  if (error) {
    console.log(error);
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (error) {
    content = <ErrorModal />;
  } else {
    content = <RestaurantsList restaurants={data} />;
  }

  return <div className={classes.main}>{content}</div>;
};

export default Restaurants;
