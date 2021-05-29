import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import ContactForm from './ContactForm';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function ContactModal() {
  const classes = useStyles();

  return (
    <>
      <h1>Formulaire de contact</h1>
      <Paper className={classes.pageContent}>
        <ContactForm />
      </Paper>
    </>
  );
}
