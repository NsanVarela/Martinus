import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(initialFieldsValues) {

  const [values, setValues] = useState(initialFieldsValues);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]:value
    })
  }

  return {
    values,
    setValues,
    handleInputChange
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputBase-root': {
      width: '100%',
      margin: theme.spacing(1),
    }
  }
}))

export function Form(props) {

  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  )
}