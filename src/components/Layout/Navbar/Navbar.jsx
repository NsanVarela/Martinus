import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';

import Main from '../../../pages/Main';
import Who from '../../../pages/Who';
import Mission from '../../../pages/Mission';
import Shop from '../../../pages/Shop';
import Testimonial from '../../../pages/Testimonial';
import Event from '../../../pages/Event';

export default function Navbar() {

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }

  return (
    <>
      <AppBar position="sticky">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="accueil" variant="scrollable"/>
          <Tab label="qui sommes-nous ?" />
          <Tab label="nos misions" />
          <Tab label="boutique solidaire" />
          <Tab label="témoignages" />
          <Tab label="évènements" />
        </Tabs>
      </AppBar>
      
    </>
  )
}
