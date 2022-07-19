import classes from "./Menu.module.css";

const MenuItem = ({ meal, price, description }) => {
  console.log(description);

  return (
    <li className={classes["menu-list-item"]}>
      <div className={classes["meal-info"]}>
        <div className={classes.meal}>
          <h1>{meal}</h1>
        </div>
        <div className={classes['meal-description']}>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes.price}>
        <h3>{price}</h3>
      </div>
    </li>
  );
};

export default MenuItem;
