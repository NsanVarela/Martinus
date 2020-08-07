import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Who from './Components/Who';
import Mission from './Components/Mission';
import Shop from './Components/Shop';
import Testimonial from './Components/Testimonial';
import Event from './Components/Event';
import Contact from './Components/Contact';
import Footbar from './Components/Footbar';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
};