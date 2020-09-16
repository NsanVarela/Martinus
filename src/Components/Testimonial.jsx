import React from 'react';
import { makeStyles } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import videoCover1 from '../assets/videos/cover-videos/madeleine.png';
import videoCover2 from '../assets/videos/cover-videos/jacques-dellolio.png';

const useStyles = makeStyles({
    testimonial: {
        backgroundColor: '#E2E3E5',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        paddingTop: '60px',
        color: '#333333',
    },
    text: {
        maxWidth: '80%',
        marginTop: '30px',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '30px',
        textAlign: 'justify',
    },
    slider: {
        // marginLeft: '30%',
    },
    player: {
        marginLeft: '10%',
        // marginRight: '20%',
        // width: '80%',
    }
});

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#fcd110', height: '90px', width: '60px', marginRight: '10%', zIndex: '10' }}
            onClick={onClick}
        />
    );
}

const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#fcd110', height: '90px', width: '60px', marginLeft: '10%', zIndex: '10' }}
            onClick={onClick}
        />
    );
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
};


export default function Testimonial() {
    const classes = useStyles();
    return(
        <>
            <div className={classes.testimonial}>
                <h3 className={classes.title}>Ils nous soutiennent.</h3>
                <p className={classes.text}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
                quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora qvoluptatem.
                </p>
                <Slider className={classes.slider} {...settings}>
                    <ReactPlayer 
                        className={classes.player} 
                        url="https://youtu.be/ycrqJGWdfzk" 
                        width="80%"
                        height="400px"
                        light={videoCover1}
                    />
                    <ReactPlayer
                        className={classes.player} 
                        url="https://youtu.be/JwoV1-ykm9E"
                        width="80%"
                        height="400px"
                        light={videoCover2}
                    />
                </Slider>
            </div>
        </>
    )
}