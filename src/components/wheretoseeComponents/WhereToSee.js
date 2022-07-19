import ErrorModal from "../ui/ErrorModal";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./WhereToSee.module.css";
import WhereToSeeList from "./WhereToSeeList";

const WhereToSee = ({ data, isLoading, error }) => {
  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (error) {
    content = <ErrorModal />;
  } else {
    content = <WhereToSeeList places={data} />;
  }

  return <div className={classes.main}>{content}</div>;
};

export default WhereToSee;
