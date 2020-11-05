import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import theme from './components/DesignUI/Theme';

import Main from './pages/Main';
import Who from './pages/Who';
import Mission from './pages/Mission';
import Shop from './pages/Shop';
import Testimonial from './pages/Testimonial';
import Event from './pages/Event';
import Contact from './pages/Contact';

import Footbar from './components/Footbar';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Sidebar />
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
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
