import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import imgMain2 from '../assets/images/main/imgMain2.png';
import Controls from '../components/controls/Controls';
import SimplePopup from '../components/controls/SimplePopup';
import NewsletterForm from '../modals/newsletter/NewsletterForm';
import DonationModal from '../modals/donation/DonationModal';
import newsletterService from '../services/newsletterService';
import Notification from '../components/controls/Notification';

const useStyles = makeStyles({
  main: {
    backgroundColor: '#E2E3E5',
    height: '100%',
    position: 'relative',
  },
  images: {
    height: '100%',
  },
  baseline1: {
    fontSize: '50px',
    zIndex: 10,
    color: '#333333',
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'none',
  },
  baseline2: {
    fontSize: '50px',
    zIndex: 10,
    color: '#efefef',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  donationBtn: {
    zIndex: 10,
    backgroundColor: '#0cc722',
    color: '#FFFFFF',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '20%',
    right: '10%',
  },
  newsletterBtn: {
    zIndex: 10,
    backgroundColor: '#FFFFFF',
    color: '#4973b9',
    borderRadius: '25px',
    textTransform: 'none',
    fontSize: '14px',
    position: 'absolute',
    top: '15%',
    right: '10%',
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
  // donationForm: {
  //   width: '100%',
  //   height: '750px',
  //   border: 'none',
  // },
  // donationBtn: {
  //   width: '100%',
  //   height: '70px',
  //   border: 'none',
  // },
  by: {
    width: '100%',
    textAlign: 'center',
  },
});

export default function Main() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging() {
      return (
        <div>
          <span className={classes.dot}></span>
        </div>
      );
    },
  };
  const [openNewsPopup, setOpenNewsPopup] = useState(false);
  const [openDonationPopup, setOpenDonationPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen: false, message: '', status: '' });
  const filledForm = async (contact, resetForm) => {
    const result = await newsletterService(contact);
    resetForm();
    setOpenNewsPopup(false);
    setOpenDonationPopup(false);
    setNotify({ isOpen: true, message: result.message, status: result.status });
  };

  return (
    <div id="main">
      <div className={classes.main}>
        <Controls.Button
          text="Neswletter"
          variant="contained"
          className={classes.newsletterBtn}
          onClick={() => setOpenNewsPopup(true)}
        />
        <donationSection></donationSection>
        <Typography variant="h1" className={classes.baseline2}>
          Ensemble,<br></br>nous pouvons tant<br></br>accomplir
        </Typography>
        <div className={classes.by}>
          Propulsé par
          <a href="https://www.helloasso.com" rel="nofollow">
            HelloAsso
          </a>
        </div>
        {/* <span className={classes.baseline1}>
          Éducation,<br></br> parchemin de la vie
        </span> */}
        <Controls.Button
          text="Faire un don"
          variant="contained"
          className={classes.donationBtn}
          onClick={() => setOpenDonationPopup(true)}
        />
        {/* <iframe
          title="Bouton de don"
          id="haWidget"
          allowTransparency="true"
          src="https://helloasso.com/associations/martinu-s-man-alende/formulaires/2/widget-bouton"
          className={classes.donationBtn}
          onLoad="window.scroll(0, this.offsetTop)"
        ></iframe> */}
        <SimplePopup openPopup={openNewsPopup} setOpenPopup={setOpenNewsPopup}>
          <NewsletterForm filledForm={filledForm} />
        </SimplePopup>
        <SimplePopup openPopup={openDonationPopup} setOpenPopup={setOpenDonationPopup}>
          <DonationModal />
        </SimplePopup>
        <Slider {...settings}>
          <img className={classes.images} src={imgMain2} width="100%" alt="img 2" />
          <img className={classes.images} src={imgMain2} width="100%" alt="img 2" />
        </Slider>
        <Notification notify={notify} setNotify={setNotify} />
      </div>
    </div>
  );
}
