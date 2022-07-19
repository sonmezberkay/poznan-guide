import classes from "./Menu.module.css";

import { useContext } from "react";
import MenuContext from "../../context/menuContext";
import MenuItem from "./MenuItem";

const Menu = ({ data }) => {

    const menuCtx = useContext(MenuContext);
    const menuContent = menuCtx.menuContent;
    const name = menuCtx.name;


  return (
    <div className={classes['menu-container']}>
      <ul className={classes['menu-list']}>
        <h2 className={classes['menu-header']}>{name}</h2>
        {menuContent.map(meals => (
            <MenuItem key={Math.random()} meal={meals.meal} price={meals.price} description={meals.ingredients} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
