import { faCloud, faCloudRain, faDroplet, faMoon, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import classes from './Weather.module.css';


const Weather = () => {
    const key = '513813b814bc9e7dbba2e21d7b252a23';
    const [city, setCity] = useState('');
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

    const [data, setData] = useState({});
    const [cityError, setCityError] = useState('');


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            fetch(weatherUrl).then(response => {
                if (response.ok) {
                    response.json().then(
                        data => {
                            setData(data);
                            console.log(data);
                            setCity('');
                        }
                    )
                } else if(city !== '' && !response.ok) {
                    setCityError(`${city[0].toUpperCase() + city.slice(1)}  is not a valid city`);
                }
            })
        }
    };

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=poznan&units=metric&appid=${key}`).then(response => {
            response.json().then(
                data => {
                    setData(data);
                    console.log(data);
                }
            )
        })
    }, [])

    let cityErrorContent;

   const cityErrorHandler = () => {
        if (cityError !== '') {
            cityErrorContent = <p className={classes.error}>{cityError}</p>

            setTimeout(() => {
                setCityError('');
            }, 5000);
        } else return
   };

   if (cityError !== '') {
    cityErrorHandler();
   }

   const time = new Date().getHours();

   let weatherIcon;
   const windIcon = <FontAwesomeIcon icon={faWind} />
   const humidityIcon = <FontAwesomeIcon icon={faDroplet} />

   if (data.weather && data.weather[0].main === 'Clear' && (time > 20 || time < 6) ) {
    weatherIcon = <FontAwesomeIcon className={classes['weather-icon']} icon={faMoon} />
   } if (data.weather && data.weather[0].main === 'Clear' && (time < 20 && time > 6) ) {
    weatherIcon = <FontAwesomeIcon className={classes['weather-icon']} icon={faSun} />
   } if (data.weather && data.weather[0].main === 'Rain') {
    weatherIcon = <FontAwesomeIcon className={classes['weather-icon']} icon={faCloudRain} />
   } if (data.weather && data.weather[0].main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon className={classes['weather-icon']} icon={faCloud} />
   }


    return (
        <div className={classes.app}>
            <div className={classes.container}>
                <div className={classes.top}>
                    <div className={classes['top-left']}>
                    <div className={classes.location}>
                        <p>{data.name}</p>
                    </div>
                    <div className={classes.temp}>
                        {data.main && <h1>{Math.round(data.main.temp)}°C</h1>}
                    </div>
                    </div>
                    <div className={classes.description}>
                        {data.weather && data.weather[0].main}
                        {weatherIcon}
                    </div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.feels}>
                    {data.main && <p>Feels like {Math.round(data.main.feels_like)}°C</p>}
                    </div>
                    <div className={classes.humidity}>
                    {data.main && <p>{humidityIcon} {data.main.humidity}%</p>}
                    </div>
                    <div className={classes.wind}>
                    {data.main && <p>{windIcon} {data.wind.speed} KM/H</p>}
                    </div>
                </div>
            <div className={classes.input}>
                {cityErrorContent}
                <input type='text' value={city} onChange={event => setCity(event.target.value)} onKeyPress={searchLocation} placeholder='search anohter location...' />
            </div>
            </div>
        </div>
    );
};

export default Weather