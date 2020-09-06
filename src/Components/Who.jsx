import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    who: {
        backgroundColor: '#efefef',
        height: 'calc(100vh - 2rem - 50px)',
    },
});

export default function Who() {
    const classes = useStyles();
    return (
        <div className={classes.who} id="who">
            <p>Who area</p>
        </div> 
    )
}
