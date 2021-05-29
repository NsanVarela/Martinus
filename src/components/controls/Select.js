import React from 'react';
import { makeStyles, FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(15),
    width: '50%',
  },
}));

export default function Select(props) {
  const classes = useStyles();
  const { name, label, value, onChange, options } = props;
  return (
    <FormControl variant="outlined" className={`${classes.root}`}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="" disabled>
          Quantité souhaitée
        </MenuItem>
        {options.map(item => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
