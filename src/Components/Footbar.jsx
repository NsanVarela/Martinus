import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footbar: {
        backgroundColor: '#3B3B3B',
        height: 'calc(60vh - 2rem - 50px)',
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