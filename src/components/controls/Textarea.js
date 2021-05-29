import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Textarea(props) {
  const { name, label, value, error = null, onChange } = props;
  return (
    <TextareaAutosize
      variant="outlined"
      label={label}
      name={name}
      rowsMax={4}
      aria-label="maximum height"
      placeholder="Saisissez ici votre message..."
      value={value}
      onChange={onChange}
      style={{
        marginLeft: '5%',
        width: '90%',
        height: '140px',
        border: 'lightgray solid 1px',
        borderRadius: '5px',
        marginTop: '10px',
        padding: '10px',
        resize: 'none',
      }}
      {...(error && { error: true, helpertext: error })}
    />
  );
}
