import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import contactService from '../services/contactService';
import ContactForm from '../modals/contact/ContactForm';
import Controls from '../Components/controls/Controls';
import Popup from '../Components/controls/Popup';
import Notification from '../Components/controls/Notification';

const useStyles = makeStyles({
  contact: {
    backgroundColor: '#E2E3E5',
    height: '100%',
    padding: '5% 20%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contactTitle: {
    color: '#333333',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  contactBtn: {
    zIndex: 10,
    backgroundColor: '#0cc722',
    color: '#FFFFFF',
    fontWeight: 'bold',
    minWidth: '90px',
  },
});

export default function Contact() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [notify, setNotify] = React.useState({ isOpen: false, message: '', status: '' });
  const filledForm = async (contact, resetForm) => {
    const result = await contactService(contact);
    resetForm();
    setOpenPopup(false);
    setNotify({ isOpen: true, message: result.message, status: result.status });
  };

  return (
    <div className={classes.contact} id="contact">
      <Typography variant="h6" className={classes.contactTitle}>
        Participez à l&apos;aventure Martinu&apos;s en tant que bénévole ou partenaire !
      </Typography>
      <Controls.Button
        text="Nous contacter"
        variant="contained"
        className={classes.contactBtn}
        onClick={() => setOpenPopup(true)}
      />
      <Popup title="Formulaire de contact" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <ContactForm filledForm={filledForm} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
