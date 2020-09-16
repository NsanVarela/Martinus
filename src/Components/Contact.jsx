import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    contact: {
        backgroundColor: '#E2E3E5',
        height: '100%',
    },
});

export default function Contact() {
    const classes = useStyles();
    return(
        <div className={classes.contact} id="contact">
            <p>Contact area</p>
        </div>
    );
}
