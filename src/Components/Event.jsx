import React from 'react';
import { makeStyles } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import imgEvent1 from '../assets/images/events/imgEvent1.jpg';
import imgEvent2 from '../assets/images/events/imgEvent2.jpg';
import imgEvent3 from '../assets/images/events/imgEvent3.png';

const useStyles = makeStyles({
    event: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        padding: '5% 22% 5% 22%',
        position: 'relative',
        display: 'flex',
    },
    imgContainer: {
        width: '40%',
        marginRight: '5%',
    },
    eventDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    eventTitle: {
        color: '#333333',
    },
    eventCorps: {
        textAlign: 'justify',
    },
    registerBtn: {
        zIndex: 10,
        backgroundColor: '#0cc722',
        color: '#FFFFFF',
        fontWeight: 'bold',
        maxWidth: '280px',
        marginBottom: '10%',
    },
});

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Event() {
    const classes = useStyles();
    return (
        <div className={classes.event} id="event">
            <div className={classes.imgContainer}>
                <Slider {...settings}>
                    <img className={classes.images} src={imgEvent1} alt="img 1" />
                    <img className={classes.images} src={imgEvent2} alt="img 2" />
                    <img className={classes.images} src={imgEvent3} alt="img 3" />
                </Slider>
            </div>
            <div className={classes.eventDetails}>
                <h3 className={classes.eventTitle}>JANVIER 2021</h3>
                <p className={classes.eventCorps}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.</p>
                <Button className={classes.registerBtn} variant="contained">je participe à cet évènement</Button>
            </div>
        </div>
    );
}
