import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    mission: {
        backgroundColor: '#336BFF',
        height: 'calc(70vh - 2rem - 50px)',
    },
});

export default function Mission() {
    const classes = useStyles();
    return(
        <div className={classes.mission}>
            <p>Mission area</p>
        </div>
    )
}
