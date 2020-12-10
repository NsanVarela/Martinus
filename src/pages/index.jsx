import React, { useState } from 'react';

import Sidebar from '../components/Layout/Sidebar';
import Navbar from '../components/Layout/Navbar/Navbar';
import Footer from '../components/Layout/Footer/Footer';
import Who from './Who';
import Main from './Main';
import Event from './Event';
import Contact from './Contact';
import Mission from './Mission';
import Testimonial from './Testimonial';
import InfoSection from '../components/InfoSection';
import { shopObjOne } from '../components/InfoSection/Data';

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
      <InfoSection {...shopObjOne} />
      <Testimonial />
      <Event />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
