import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footbar: {
        backgroundColor: '#3B3B3B',
        height: '100%',
    },
});

export default function Footbar() {
    const classes = useStyles();
    return (
        <div className={classes.footbar} id="footbar">
            <p>Footbar area</p>
        </div>
    );
}