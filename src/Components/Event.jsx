import React from 'react';
import { makeStyles } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import {events} from '../data/Events.js';

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
                    {events.map((item) => {
                        return (
                            <>
                                <img className={classes.images} src={item.imgPath} alt="évènements"/>
                                <div className={classes.eventDetails}>
                                    <h3 className={classes.eventTitle}>{item.title}</h3>
                                    <p className={classes.eventCorps}>{item.description}</p>
                                    <Button className={classes.registerBtn} variant="contained">je participe à cet évènement</Button>
                                </div>
                            </>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}
