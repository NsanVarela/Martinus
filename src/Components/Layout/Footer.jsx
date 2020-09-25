import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#272727',
        height: '100%',
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
