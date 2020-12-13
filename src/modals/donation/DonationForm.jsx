import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  donationForm: {
    width: '500px',
    height: '550px',
    border: 'none',
  },
});

export default function DonationForm() {
  const classes = useStyles();
  return (
    <>
      <iframe
        title="Formulaire de don"
        id="haWidget"
        allowTransparency="true"
        scrolling="auto"
        src="https://helloasso.com/associations/martinu-s-man-alende/formulaires/2/widget"
        className={classes.donationForm}
        onLoad="window.scroll(0, this.offsetTop)"
      ></iframe>
    </>
  );
}
