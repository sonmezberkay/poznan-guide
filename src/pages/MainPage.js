import MapComponent from '../components/mainpageComponents/map/MapComponent';
import NewsContainer from '../components/mainpageComponents/newsContainer/NewsContainer';
import Events from '../components/mainpageComponents/eventsContainer/Events';
import Weather from '../components/mainpageComponents/weather/Weather';
import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes['upper-container']}>
                    <div className={classes['upper-left']}>
                        <Weather />
                    </div>
                    <div className={classes['upper-right']}>
                        <NewsContainer />
                    </div>
                </div>
                <div className={classes['lower-container']}>
                    <div className={classes['lower-left']}>
                        <MapComponent />
                    </div>
                    <div className={classes['lower-right']}>
                        <Events />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainPage;