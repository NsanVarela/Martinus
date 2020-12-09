import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import NewsletterForm from './NewsletterForm';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function NewsletterModal() {
  console.log('in');
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent}>
        <NewsletterForm />
      </Paper>
    </>
  );
}
