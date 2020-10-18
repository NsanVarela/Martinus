import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './App.css';
import theme from './components/DesignUI/Theme';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Main from './components/Main';
import Who from './components/Who';
import Mission from './components/Mission';
import Shop from './components/Shop';
import Testimonial from './components/Testimonial';
import Event from './components/Event';
import Contact from './components/Contact';
import Footbar from './components/Footbar';
import ContactModal from './modals/contact/ContactModal';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Main />
      <Who />
      <Mission />
      <Shop />
      <Testimonial />
      <Event />
      <Contact />
      <ContactModal />
      <Footbar />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
