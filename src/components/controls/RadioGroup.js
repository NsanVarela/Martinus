/* eslint-disable react/jsx-key */
import React from 'react';
import {
  makeStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(10),
    width: '100%',
  },
}));

export default function Radiogroup(props) {
  const classes = useStyles();
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl className={`${classes.root}`}>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row className={`${classes.root}`} name={name} value={value} onChange={onChange}>
        {items.map(item => (
          <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
