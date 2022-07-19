import classes from "./AboutPage.module.css";
import { aboutCity } from "../components/aboutCity";

const AboutPage = () => {
  const cityData = aboutCity;

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes["image-container"]}>
          <img src={cityData[0].flag} alt="city" />
        </div>
        <div className={classes["text-container"]}>
          <div className={classes.about}>
            <h1>{cityData[1].title}</h1>
            <p>{cityData[1].about}</p>
          </div>
          <hr/>
          <div className={classes.history}>
            <div className={classes["history-1"]}>
                <h3>{cityData[2].subtitle}</h3>
                <p>{cityData[2].subtitleContent}</p>
            </div>
            <hr/>
            <div className={classes['history-2']}>
                <h3>{cityData[2].subtitle2}</h3>
                <p>{cityData[2].subtitle2Content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
