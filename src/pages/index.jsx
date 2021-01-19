import React, { useState } from 'react';

import Sidebar from '../Components/Layout/Sidebar';
import Navbar from '../Components/Layout/Navbar/Navbar';
import Footer from '../Components/Layout/Footer/Footer';
import Who from './Who';
import Main from './Main';
import Event from './Event';
import Contact from './Contact';
import Mission from './Mission';
import Testimonial from './Testimonial';
import InfoSection from '../Components/InfoSection';
import { shopObjOne } from '../Components/InfoSection/Data';

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
