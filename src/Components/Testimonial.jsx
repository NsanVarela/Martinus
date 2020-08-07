import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    testimonial: {
        backgroundColor: '#E2E3E5',
        height: 'calc(120vh - 2rem - 50px)',
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