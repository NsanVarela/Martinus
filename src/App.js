import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './App.css';
import theme from './components/DesignUI/Theme';

import Footer from './components/Layout/Footer';
import Main from './pages/Main';
import Who from './pages/Who';
import Mission from './pages/Mission';
import Shop from './pages/Shop';
import Testimonial from './pages/Testimonial';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Footbar from './components/Footbar';
import Navbar from './components/Layout/Navbar/Navbar';

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
      <Footbar />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
