import React, { useState, forwardRef, useEffect } from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slider from "react-slick";
import { useSpring, animated } from 'react-spring';
import imgMain2 from '../assets/images/main/imgMain2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  main: {
    position: 'absolute',
    zIndex: 700,
    marginTop: 10,
    right: 30,
  },
  images: {
    maxHeight: 600,
  },
  baseline1: {
    fontSize: 50,
    color: '#333333',
    display: 'none'
  },
  baseline2: {
    fontSize: 37,
    color: "#EFEFEF",
    maxWidth: 400,
  },
  donationBtn: {
    backgroundColor: '#0CC722',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  newsletterBtn: {
    backgroundColor: '#FFFFFF',
    color: '#4973b9',
    borderRadius: 25,
    textTransform: 'none',
    fontSize: 14,
  },
  newsletterIcon: {
    marginRight: 10,
    width: 20,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#0cc722',
    borderRadius: '50%',
    display: 'inline-block',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000",
    opacity: 0.7,
  },
});

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) onEnter();
    },
    onRest: () => {
      if (!open && onExited) onExited();
    },
  });

  return ( <animated.div ref={ref} style={style} {...other}>{children}</animated.div>);
});

export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const desktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const [settingsSlider, setSettingsSlider] = useState(null);
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickPlay: true,
  };

  const settingsDesktop = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div><span className={classes.dot}></span></div>
    ),
  };

  useEffect(() => {
    if (!desktop) setSettingsSlider({ ...settingsMobile });
    else setSettingsSlider({ ...settingsDesktop });
  }, [desktop]);

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="flex-end" spacing={10} className={classes.main}>
        {desktop && (
          <Grid item xs={12}>
            <Button className={classes.newsletterBtn} variant="contained">
              <EmailOutlinedIcon className={classes.newsletterIcon}/>Newsletter
            </Button>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.baseline2}>Ensemble<br/> nous pouvons <br/>tant accomplir</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.donationBtn} variant="contained" onClick={() => setOpen(true)}>faire un don</Button>
        </Grid>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="spring-modal-title">Spring modal</h2>
              <p id="spring-modal-description">react-spring animates me.</p>
            </div>
          </Fade>
        </Modal>
      </Grid>
      <Slider {...settingsSlider}>
        <img className={classes.images} src={imgMain2} width="100%" alt="img 2" />
        <img className={classes.images} src={imgMain2} width="100%" alt="img 2" />
      </Slider>
    </>
  );
}