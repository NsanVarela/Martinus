import React from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    contact: {
        backgroundColor: '#E2E3E5',
        height: '100%',
        padding: '5% 20%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    contactTitle: {
        color: '#333333',
        textAlign: 'center',
    },
    contactBtn: {
        zIndex: 10,
        backgroundColor: '#0cc722',
        color: '#FFFFFF',
        fontWeight: 'bold',
        minWidth: '90px',
    },
});

export default function Contact() {
    const classes = useStyles();
    return(
        <div className={classes.contact} id="contact">
            <h3 className={classes.contactTitle}>Participez à l'aventure Martinu's en tant que bénévole ou partenaire !</h3>
            <Button className={classes.contactBtn} variant="contained">contact</Button>
        </div>
    );
}
