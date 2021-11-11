import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll, Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core';

import logo from '../../../assets/images/logo-martinus-blanc.svg';

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: '#272727',
  },
  footerLogo: {
    width: '15%',
  },
  footerWrap: {
    padding: '48px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  footerLinksContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      paddingTop: '32px',
    },
  },
  footerLinksWrapper: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '0.5rem',
    },
  },
  footerLinkItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '16px',
    textAlign: 'left',
    width: '160px',
    boxSizing: 'border-box',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: '10px,',
      width: '100%',
    },
  },
  footerLinkTitle: {
    fontSize: '14px',
    marginBottom: '16px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    fontSize: '14px',
    '&:hover': {
      color: '#01bf71',
      transition: '0.3s ease-out',
    },
  },
  socialMedia: {
    maxWidth: '1000px',
    width: '100%',
  },
  socialMediaWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: '1100px',
    margin: '40px auto 0 auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  socialLogo: {
    justifyContent: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  websiteRights: {
    color: '#fff',
    marginBottom: '16px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '240px',
  },
  socialIconsLink: {
    color: '#fff',
    fontSize: '24px',
  },
}));

const toggleMain = () => {
  scroll.scrollToTop();
};

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerWrap}>
        <Link className={classes.socialLogo} to="/" onClick={toggleMain}>
          <img src={logo} className={classes.footerLogo} alt="Logo de l'association Martinu's" />
        </Link>
        <div className={classes.footerLinksContainer}>
          <div className={classes.footerLinksWrapper}>
            <div className={classes.footerLinkItems}>
              <h2 className={classes.footerLinkTitle}>À propos de nous</h2>
              <Link className={classes.footerLink} to="who">
                Qui sommes-nous ?
              </Link>
              <Link className={classes.footerLink} to="missions">
                Missions
              </Link>
              <Link className={classes.footerLink} to="shop">
                Boutique solidaire
              </Link>
              <Link className={classes.footerLink} to="/">
                Conditions d&apos;utilisation
              </Link>
            </div>
            <div className={classes.footerLinkItems}>
              <h2 className={classes.footerLinkTitle}>Nous contacter</h2>
              <Link className={classes.footerLink} to="contact">
                Contact
              </Link>
              <Link className={classes.footerLink} to="events">
                Lieu d&apos;évènement
              </Link>
              <Link className={classes.footerLink} to="shop">
                Boutique solidaire
              </Link>
              <Link className={classes.footerLink} to="/">
                Sponsor
              </Link>
            </div>
          </div>
          <div className={classes.footerLinksWrapper}>
            <div className={classes.footerLinkItems}>
              <h2 className={classes.footerLinkTitle}>Nous soutenir</h2>
              <Link className={classes.footerLink} to="/">
                Témoigner
              </Link>
              <Link className={classes.footerLink} to="/">
                Ambassadeurs
              </Link>
              <Link className={classes.footerLink} to="/">
                Influenceurs
              </Link>
              <Link className={classes.footerLink} to="/">
                Nous rejoindre
              </Link>
            </div>
            <div className={classes.footerLinkItems}>
              <h2 className={classes.footerLinkTitle}>Réseaux sociaux</h2>
              <Link className={classes.footerLink} to="/">
                Instagram
              </Link>
              <Link className={classes.footerLink} to="/">
                Facebook
              </Link>
              <Link className={classes.footerLink} to="/">
                Youtube
              </Link>
              <Link className={classes.footerLink} to="/">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <section className={classes.socialMedia}>
          <div className={classes.socialMediaWrap}>
            <p className={classes.websiteRights}>NsanV © {new Date().getFullYear()} All rights reserved.</p>
            <div className={classes.socialIcons}>
              <a
                className={classes.socialIconsLink}
                href="//www.instagram.com/assomartinus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className={classes.socialIconsLink}
                href="//www.facebook.com/Martinus-Man-Elende-573424033172603/?ref=page_internal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className={classes.socialIconsLink}
                href="//www.youtube.com/channel/UCkr_w6spGPWQBn8Vtex4Kgg/featured"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              {/* <a
                className={classes.socialIconsLink}
                href="//www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a> */}
              {/* <a
                className={classes.socialIconsLink}
                href="//www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
