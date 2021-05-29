import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import ShopForm from './ShopForm';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function ShopModal() {
  const classes = useStyles();

  return (
    <>
      <h1>Formulaire de commande</h1>
      <Paper className={classes.pageContent}>
        <ShopForm />
      </Paper>
    </>
  );
}
