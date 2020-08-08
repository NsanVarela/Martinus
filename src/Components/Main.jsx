import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgMain1 from '../assets/images/imgMain1.jpg';
import imgMain2 from '../assets/images/imgMain2.jpg';
import imgMain3 from '../assets/images/imgMain3.jpg';

const useStyles = makeStyles({
    main: {
        backgroundColor: '#E2E3E5',
        height: 'calc(100vh - 2rem - 50px)',
    },
});

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Main() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.main}>
                <Slider {...settings}>
                    <img src={imgMain1} width="100%" alt="img 1" />
                    <img src={imgMain2} width="100%" alt="img 2" />
                    <img src={imgMain3} width="100%" alt="img 3" />
                </Slider>
            </div>
        </>
    )
}