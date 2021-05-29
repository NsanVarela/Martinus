import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Controls from './Controls';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    position: 'absolute',
    top: theme.spacing(5),
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup} maxWidth="sm" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <Typography variant="h3" component="div" style={{ flexGrow: 2 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
