import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from './NewsContainer.module.css'
import '../../../index.css';
import newsData from "./newsData";



const NewsContainer = () => {
    
    const [imageIndex, setImageIndex] = useState(0);
    
    
    const imageIncreaseHandler = () => {
        if (imageIndex <= newsData.length) {
            setImageIndex(prevIndex => prevIndex + 1);
        } if (imageIndex === newsData.length - 1) {
            setImageIndex(0);
        }
    };

    const imageDecreaseHandler = () => {
        if (imageIndex > 0) {
            setImageIndex(prevIndex => prevIndex - 1);
        } if (imageIndex === 0) {
            setImageIndex(newsData.length - 1);
        }
    };


    const moveDot = (index) => {
        setImageIndex(index);
    };

    
    

    return (
        <div className={classes.container}>
            <div className={classes['image-container']}>
                <img src={newsData[imageIndex].url} alt='img' />
            </div>
            <div className={classes['text-container']}>
                <h2>{newsData[0].title}</h2>
                <article>{newsData[0].description.substring(0,80)}...</article>
            </div>
            <div className={classes['arrow-container']}>
                <FontAwesomeIcon className={classes['left-arrow']} icon={faArrowAltCircleLeft} onClick={imageDecreaseHandler} />
                <FontAwesomeIcon className={classes['right-arrow']} icon={faArrowAltCircleRight} onClick={imageIncreaseHandler} />
            </div>
            <div className={classes['dot-container']}>
                {Array.from({length: newsData.length}).map((item, index) => (
                    <div key={Math.random()} className={classes['outer-dot']}>
                    <div onClick={() => moveDot(index)} className={imageIndex === index ? 'dot active': 'dot'}></div>
                    </div>
                ))}
            </div>
        </div>  
    )
};

export default NewsContainer;