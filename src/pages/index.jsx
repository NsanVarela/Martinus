import React, { useState } from 'react';

import Sidebar from '../components/Layout/Sidebar';
import Navbar from '../components/Layout/Navbar/Navbar';
import Main from './Main';
import Who from './Who';
import Mission from './Mission';
import Shop from './Shop';
import Testimonial from './Testimonial';
import Event from './Event';
import Contact from './Contact';
import Footer from '../components/Layout/Footer/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main />
      <Who />
      <Mission />
      <Shop />
      <Testimonial />
      <Event />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
