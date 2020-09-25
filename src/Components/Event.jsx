import React from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {events} from '../data/events.js';
import EventForm from '../components/DesignUI/EventForm';

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000000",
        opacity: "0.8",
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
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    return (
        <>
        <div className={classes.event} id="event">
            <div className={classes.imgContainer}>
                <Slider {...settings}>
                    {events.map((item) => {
                        return (
                            <>
                                <img className={classes.images} src={item.imgPath} alt="évènements"/>
                                <div className={classes.eventDetails}>
                                    <h3 className={classes.eventTitle}>{item.title}</h3>
                                    <p className={classes.eventCorps}>{item.description}</p>
                                    <Button className={classes.registerBtn} onClick={handleClickOpen} variant="contained">je participe à cet évènement</Button>
                                </div>
                            </>
                        );
                    })}
                </Slider>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Réservation</DialogTitle>
                <DialogContent>
                <DialogContentText>
                Pour vous inscrire à cet évènement, veuillez renseigner les champs suivant. Nous reviendrons vers vous pour confirmer votre participation.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nom"
                    type="name"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Adresse email"
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={handleClose} color="primary">
                    Confirmer
                </Button>
                </DialogActions>
            </Dialog>
        </div>
        </>
    );
}
