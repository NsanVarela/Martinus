import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    width: '880px',
  },
  donationForm: {
    width: '530px',
    height: '600px',
    border: 'none',
  },
}));

export default function DonationModal() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent}>
        <iframe
          title="Formulaire de don"
          id="haWidget"
          allowTransparency="true"
          scrolling="auto"
          src="https://helloasso.com/associations/martinu-s-man-alende/formulaires/2/widget"
          className={classes.donationForm}
          onLoad="window.scroll(0, this.offsetTop)"
        ></iframe>
      </Paper>
    </>
  );
}
