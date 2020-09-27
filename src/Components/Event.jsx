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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

import events from '../data/events';

const useStyles = makeStyles({
  event: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    padding: '5% 22% 5% 22%',
    position: 'relative',
    display: 'flex',
  },
  imgContainer: {
    width: '40%',
    marginRight: '5%',
  },
  images: {
    maxHeight: '430px',
  },
  eventDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  eventTitle: {
    color: '#333333',
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
  },
  inputFeedback: {
    color: '#9B2841',
    marginLeft: '14px',
    marginRight: '14px',
    fontSize: '0.6666666666666666rem',
    marginTop: '3px',
    textAlign: 'left',
    fontFamily: 'GothamBook',
    fontWeight: 400,
    lineHeight: 1.66,
  },
  select: {
    marginTop: '10%',
    marginBottom: '10%',
  },
  selectontrol: {
    marginLeft: '5%',
    minWidth: '20%',
  },
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Event() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);
  const [ticket, setTicket] = React.useState(1);
  const [isSubmitionCompleted, setSubmitionCompleted] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenSelect = () => {
    setOpenSelect(true);
    setSubmitionCompleted(false);
  };
  const handleCloseSelect = () => {
    setOpenSelect(false);
  };
  const handleChangeValue = event => {
    setTicket(event.target.value);
  };

  return (
    <div className={classes.event} id="event">
      <div className={classes.imgContainer}>
        <Slider {...settings}>
          {events.map(item => {
            return (
              <>
                <img className={classes.images} src={item.imgPath} alt="évènements" />
                <div className={classes.eventDetails}>
                  <h3 className={classes.eventTitle}>{item.title}</h3>
                  <p className={classes.eventCorps}>{item.description}</p>
                  <Button className={classes.registerBtn} variant="contained" onClick={handleClickOpenDialog}>
                    je participe à cet évènement
                  </Button>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Réservation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Pour vous inscrire à cet évènement, merci de renseigner les champs du formulaire. Nous reviendrons vers
                vous pour vous confirmer votre inscription.
              </DialogContentText>
              <Formik
                initialValues={{ firstname: '', name: '', email: '' }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  console.log('voici les données du formulaire : ', values);
                  // axios
                  //   .post(contactFormEndpoint, values, {
                  //     headers: {
                  //       'Access-Control-Allow-Origin': '*',
                  //       'Content-Type': 'application/json',
                  //     },
                  //   })
                  //   .then(resp => {
                  //     setSubmitionCompleted(true);
                  //   });
                }}
                validationSchema={Yup.object().shape({
                  firstname: Yup.string().required(`Le prénom est requis.`),
                  name: Yup.string().required(`Le nom est requis.`),
                  email: Yup.string()
                    .email()
                    .required(`L'email est requis.`),
                  ticket: Yup.number().required(`Le nombre de ticket est requis.`),
                })}
              >
                {props => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        label="Prénom"
                        name="firstname"
                        className={classes.textField}
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.firstname && touched.firstname && errors.firstname}
                        margin="normal"
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
                        error={errors.name && touched.name}
                        label="Nom"
                        name="name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name && errors.name}
                        margin="normal"
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
                        error={errors.email && touched.email}
                        label="Email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.email && touched.email && errors.email}
                        margin="normal"
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
                            error={errors.ticket && touched.ticket}
                            name={ticket}
                            open={openSelect}
                            onClose={handleCloseSelect}
                            onOpen={handleOpenSelect}
                            onBlur={handleBlur}
                            value={values.ticket}
                            onChange={handleChangeValue}
                            helperText={errors.ticket && touched.ticket && errors.ticket}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Select>
                          <div className={classes.inputFeedback}>{errors.ticket}</div>
                        </FormControl>
                      </div>
                      <DialogActions>
                        <Button
                          type="button"
                          color="primary"
                          onClick={(handleCloseDialog, handleReset)}
                          disabled={!dirty || isSubmitting}
                        >
                          Annuler
                        </Button>
                        <Button
                          type="submit"
                          className="outline"
                          onClick={(handleCloseDialog, handleSubmit)}
                          disabled={!dirty || isSubmitting}
                        >
                          Submit
                        </Button>
                        {/* <DisplayFormikState {...props} /> */}
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
        {isSubmitionCompleted && <React.Fragment></React.Fragment>}
      </Dialog>
    </div>
  );
}
