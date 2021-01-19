import React from 'react';

import { makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imageEvent from '../assets/images/events/imgEvent3.png';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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
  imgContainer: {
    width: '40%',
    marginRight: '5%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: 0,
    },
  },
  images: {
    maxHeight: '430px',
    marginRight: '5%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  eventDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  eventTitle: {
    color: '#333333',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  eventCorps: {
    textAlign: 'justify',
  },
  registerBtn: {
    zIndex: 10,
    backgroundColor: '#0cc722',
    color: '#FFFFFF',
    fontWeight: 'bold',
    maxWidth: '280px',
    marginBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  registerMobileBtn: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  select: {
    marginTop: '10%',
    marginBottom: '10%',
  },
  selectontrol: {
    marginLeft: '5%',
    minWidth: '20%',
  },
}));

export default function Event() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);
  const [ticket, setTicket] = React.useState(1);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenSelect = () => {
    setOpenSelect(true);
  };
  const handleCloseSelect = () => {
    setOpenSelect(false);
  };
  const handleChange = event => {
    setTicket(event.target.value);
  };

  return (
    <>
      <div className={classes.event} id="events">
        <Button className={classes.registerMobileBtn} variant="contained" onClick={handleClickOpenDialog}>
          je participe à cet évènement
        </Button>
        <img className={classes.images} src={imageEvent} alt="évènements" />
        <div className={classes.eventTitle}>
          <h3 className={classes.eventTitleContent}>TITRE EVENEMENT</h3>
          <p className={classes.eventCorps}>{description}</p>
          <Button className={classes.registerBtn} variant="contained" onClick={handleClickOpenDialog}>
            je participe à cet évènement
          </Button>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Réservation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour vous inscrire à cet évènement, merci de renseigner les champs du formulaire. Nous reviendrons vers vous
            pour vous confirmer votre inscription.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="Prénom"
            type="text"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />
          <div className={classes.select}>
            <Button className={classes.button} onClick={handleOpenSelect}>
              Choisissez le nombre de ticket :
            </Button>
            <FormControl className={classes.selectontrol}>
              <InputLabel id="select-label">Ticket(s)</InputLabel>
              <Select
                open={openSelect}
                onClose={handleCloseSelect}
                onOpen={handleOpenSelect}
                value={ticket}
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Annuler
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
