import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
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
  return (
    <div className={classes.contact} id="contact">
      <Typography variant="h6" className={classes.contactTitle}>
        Participez à l&apos;aventure Martinu&apos;s en tant que bénévole ou partenaire !
      </Typography>
      <Button className={classes.contactBtn} variant="contained">
        contact
      </Button>
    </div>
  );
}
