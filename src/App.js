import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import theme from './Components/DesignUI/Theme';

import Home from './pages';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Home />
        <CssBaseline />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
