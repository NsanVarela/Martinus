import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    contact: {
        backgroundColor: '#E2E3E5',
        height: 'calc(30vh - 2rem - 50px)',
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
