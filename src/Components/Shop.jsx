import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    shop: {
        backgroundColor: '#FFFFFF',
        height: 'calc(120vh - 2rem - 50px)',
    },
});

export default function Shop() {
    const classes = useStyles();
    return(
        <div className={classes.shop} id="shop">
            <p>Shop area</p>
        </div> 
    );
}
