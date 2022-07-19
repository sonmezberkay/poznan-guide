import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={classes["navbar-buttons"]}>
        <div className={classes["left-buttons"]}>
          <a href="/" className={classes.btn}>
            <span style={{color: '#1368A9'}}>P</span>
            <span style={{color: '#136079'}}>o</span>
            <span style={{color: '#36B9EA'}}>z</span>
            <span style={{color: '#95D6DC'}}>n</span>
            <span style={{color: '#BEE9F7'}}>a</span>
            <span style={{color: '#C5E7E9'}}>ń</span>
            <span style={{color: 'white'}}>*</span>
          </a>
        </div>
        <div className={classes["right-buttons"]}>
          <ul>
            <li>
              <Link to="/city">About The City</Link>
            </li>
            <li>
              <Link to="/wheretosee/culture">Where To See</Link>
            </li>
            <li>
              <Link to="/restaurants">What To Eat</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
