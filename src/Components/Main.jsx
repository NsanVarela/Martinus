import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgMain2 from '../assets/images/main/imgMain2.png';

const useStyles = makeStyles({
    main: {
        backgroundColor: '#E2E3E5',
        height: 'calc(98vh - 2rem - 50px)',
    },
    baseline1: {
        fontSize: '50px',
        zIndex: 10,
        color: '#333333',
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'none'
    },
    baseline2: {
        fontSize: '50px',
        zIndex: 10,
        color: '#efefef',
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    donationBtn: {
        zIndex: 10,
        backgroundColor: '#0cc722',
        color: '#FFFFFF',
        position: 'absolute',
        top: '70%',
        left: '80%',
    },
    newsletterBtn: {
        zIndex: 10,
        backgroundColor: '#FFFFFF',
        color: '#4973b9',
        borderRadius: '25px',
        textTransform: 'none',
        fontSize: '14px',
        position: 'absolute',
        top: '15%',
        left: '80%',
    },
    newsletterIcon: {
        marginRight: '10px',
        width: '20px',
    }
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
                <Button className={classes.newsletterBtn} variant="contained">
                    <EmailOutlinedIcon className={classes.newsletterIcon}/>Newsletter
                </Button>
                <span className={classes.baseline1}>Éducation,<br></br> parchemin de la vie</span>
                <span className={classes.baseline2}>Ensemble,<br></br>nous pouvons tant<br></br>accomplir</span>
                <Button className={classes.donationBtn} variant="contained">faire un don</Button>
                <Slider {...settings}>
                    <img className="images" src={imgMain2} width="100%" alt="img 2" />
                </Slider>
            </div>
        </>
    )
}