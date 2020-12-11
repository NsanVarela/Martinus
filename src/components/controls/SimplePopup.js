import React from 'react';
import { Dialog, DialogContent, makeStyles } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';

// import Controls from './Controls';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    position: 'absolute',
    top: theme.spacing(5),
  },
}));

export default function SimplePopup(props) {
  const { children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  const handleKeypress = e => {
    if (e.keyCode === 13) {
      setOpenPopup(false);
    } else {
      // ...
    }
  };

  return (
    <Dialog open={openPopup} maxWidth="sm" classes={{ paper: classes.dialogWrapper }}>
      <DialogContent dividers onKeyPress={handleKeypress}>
        {children}
        {/* <CloseIcon closeIcon /> */}
      </DialogContent>
    </Dialog>
  );
}
