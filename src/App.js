import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main';
import Who from './Components/Who/Who';
import Missions from './Components/Missions/Missions';
import Shop from './Components/Shop/Shop';
import Testimonials from './Components/Testimonials/Testimonials';
import Events from './Components/Events/Event';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Who />
      <Missions />
      <Shop />
      <Testimonials />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};