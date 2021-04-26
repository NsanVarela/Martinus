import React from 'react';

import { makeStyles } from '@material-ui/core';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from '../Components/controls/Carousel';

const useStyles = makeStyles(theme => ({
  event: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    padding: '5% 22% 5% 22%',
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2%',
      paddingRight: '2%',
      flexDirection: 'column-reverse',
    },
  },
}));

export default function Event() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.event} id="events">
        <Carousel />
      </div>
    </>
  );
}
