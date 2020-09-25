import React from 'react';

import { makeStyles, FormControl, InputLabel, Input, FormHelperText  } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
    border: 'solid 1px black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'black',
  },
  textHelper: {
    color: 'red'
  }

});

export default function EventForm() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
          <FormControl>
            <InputLabel className={classes.label} htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText  className={classes.textHelper}  id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
      </div>
    </>
  );
}