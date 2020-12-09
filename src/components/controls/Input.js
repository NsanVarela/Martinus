import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, value, error = null, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      style={{ marginLeft: '10%', width: '75%' }}
      {...(error && { error: true, helperText: error })}
    />
  );
}
