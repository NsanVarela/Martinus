import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    testimonial: {
        backgroundColor: '#E2E3E5',
        height: '100%',
    },
});

export default function Testimonial() {
    const classes = useStyles();
    return(
        <div className={classes.testimonial}>
            <p>Testimonials area</p>
        </div> 
    );
}