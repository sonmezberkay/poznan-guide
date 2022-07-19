import classes from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
  <div className={classes.error}>
    <p>An error occured!</p>
    <p>Could not fetch the data!</p>
  </div>
  );
};

export default ErrorModal;
