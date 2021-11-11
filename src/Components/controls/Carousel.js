import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
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
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import events from '../../data/Events';

const useStyles = makeStyles(theme => ({
  carousel: {
    width: '100%',
    height: '500px',
    display: 'flex',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
    },
  },
  carouselInner: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  eventContent: {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {},
  },
  carouselImg: {
    maxWidth: '20rem',
    marginRight: '1rem',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // display: 'flex',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '20rem',
    },
  },
  eventImg: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
    },
  },
  eventTitle: {
    marginBottom: '5%',
  },
  eventDescription: {
    textAlign: 'justify',
    marginBottom: '5%',
  },
  eventDate: {
    marginBottom: '1rem',
  },
  actions: {
    width: '20%',
    height: '10%',
    // display: 'flex',
    display: 'none',
  },
  left: {
    flex: '5%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
  },
  center: {
    flex: '90%',
    height: '100%',
  },
  right: {
    flex: '5%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
  },
  registerBtn: {
    display: 'none',
    zIndex: 10,
    backgroundColor: '#0cc722',
    color: '#FFFFFF',
    fontWeight: 'bold',
    maxWidth: '280px',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
  },
}));

export default function Carousel() {
  const classes = useStyles();
  const [currentImg, setCurrentImg] = useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const [openSelect, setOpenSelect] = React.useState(false);
  const [ticket, setTicket] = React.useState(1);
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
      <div className={classes.carousel}>
        <div className={classes.carouselInner}>
          <div className={classes.carouselImg}>
            <img src={events[currentImg].imgPath} className={classes.eventImg} alt="photographie de l'évènement" />
          </div>
          <div className={classes.eventContent}>
            <div className={classes.eventTitle}>
              <h3>{events[currentImg].title}</h3>
            </div>
            <div className={classes.eventDescription}>
              <p>{events[currentImg].description}</p>
            </div>
            <div className={classes.eventDate}>{events[currentImg].date}</div>
            <Button className={classes.registerBtn} variant="contained" onClick={handleClickOpenDialog}>
              je participe à cet évènement
            </Button>
            <div className={classes.actions}>
              <div className={classes.left}>
                <ArrowBackIosIcon
                  onClick={() => {
                    setCurrentImg(currentImg - 1);
                  }}
                  role="button"
                />
              </div>
              <div className={classes.center}></div>
              <div className={classes.right}>
                <ArrowForwardIosIcon
                  onClick={() => {
                    setCurrentImg(currentImg + 1);
                  }}
                  role="button"
                />
              </div>
            </div>
          </div>
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
