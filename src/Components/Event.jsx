import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    event: {
        backgroundColor: '#FFFFFF',
        height: 'calc(100vh - 2rem - 50px)',
    },
});

export default function Event() {
    const classes = useStyles();
    return (
        <div className={classes.event} id="event">
            <p>Events area</p>
        </div>
    );
}
