import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#272727',
        height: 'calc(30vh - 2rem - 50px)',
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer} id="footer">
            <p>Footer area</p>
        </div>
    );
}
