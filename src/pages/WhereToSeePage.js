import { NavLink, useParams } from "react-router-dom";
import classes from "./WhereToSeePage.module.css";

import { useEffect, useState } from "react";
import WhereToSee from "../components/wheretoseeComponents/WhereToSee";

const WhereToSeePage = ({ data }) => {
  const [wheretoseeData, setWheretoseedata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch the data!");
        }
        response.json().then((data) => {
          setWheretoseedata(data);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  return (
    <div className={classes["main-container"]}>
      <div className={classes["items-container"]}>
        <div className={classes["links-container"]}>
          <div className={classes["link-button"]}>
            <NavLink activeClassName={classes.active} to="/wheretosee/culture">
              Culture
            </NavLink>
          </div>
          <div className={classes["link-button"]}>
            <NavLink
              activeClassName={classes.active}
              to="/wheretosee/nightlife"
            >
              Night Life
            </NavLink>
          </div>
          <div className={classes["link-button"]}>
            <NavLink activeClassName={classes.active} to="/wheretosee/nature">
              Nature
            </NavLink>
          </div>
        </div>
        <div className={classes["list-container"]}>
          <WhereToSee data={wheretoseeData} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default WhereToSeePage;
