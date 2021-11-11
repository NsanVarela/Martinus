import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core';

import { Nav, NavLinks } from './navEffects';
import logo from '../../../assets/images/logo-martinus.svg';

const useStyles = makeStyles(theme => ({
  nav: {
    height: '5.7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    justifySelf: 'flex-start',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  navImg: {
    width: '5rem',
  },
  mobileIcon: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      position: 'absolute',
      top: '20%',
      right: 0,
      transform: 'translate(-100%, 60%)',
      fontSize: '1.8rem',
      cursor: 'pointer',
      color: '#fff',
    },
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '5.7rem',
    zIndex: 1,
    width: '100%',
    padding: '0 1.7rem',
    maxWidth: '82.2rem',
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    },
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    marginRight: '-1.6rem',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navItem: {
    height: '5.7rem',
  },
}));

export default function Navbar({ toggle }) {
  const classes = useStyles();
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const toggleMain = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#4973b9' }}>
        <Nav className={classes.nav} scrollNav={scrollNav}>
          <div className={classes.navbarContainer}>
            <Link className={classes.navLogo} role="none" to="/" onClick={toggleMain}>
              <img src={logo} className={classes.navImg} alt="Logo de l'association Martinu's" />
            </Link>
            <div className={classes.mobileIcon} onClick={toggle} role="none">
              <FaBars />
            </div>
            <ul className={classes.navMenu}>
              <li className={classes.navItem}>
                <NavLinks to="main" smooth duration={500} spy exact offset={-80}>
                  accueil
                </NavLinks>
              </li>
              <li className={classes.navItem}>
                <NavLinks to="who" smooth duration={500} spy exact offset={-80}>
                  qui sommes-nous ?
                </NavLinks>
              </li>
              <li className={classes.navItem}>
                <NavLinks to="missions" smooth duration={500} spy exact offset={-80}>
                  missions
                </NavLinks>
              </li>
              <li className={classes.navItem}>
                <NavLinks to="shop" smooth duration={500} spy exact offset={-80}>
                  boutique solidaire
                </NavLinks>
              </li>
              <li className={classes.navItem}>
                <NavLinks to="testimonial" smooth duration={500} spy exact offset={-80}>
                  témoignages
                </NavLinks>
              </li>
              <li className={classes.navItem}>
                <NavLinks to="events" smooth duration={500} spy exact offset={-80}>
                  évènements
                </NavLinks>
              </li>
              <div className={classes.navItem}>
                <NavLinks to="contact" smooth duration={500} spy exact offset={-80}>
                  nous contacter
                </NavLinks>
              </div>
            </ul>
          </div>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
