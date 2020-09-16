import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import logo from '../assets/images/logo-martinus.svg'
import { Link } from "react-scroll";
import { makeStyles } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles({
    navBarItem: { height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem' },
    navBarLogo: { color: '#fff', justifySelf: 'start', marginLeft: '20px', cursor: 'pointer' },
    menuIcon: { display: 'block', position: 'absolute', top: '0', right: '0', transform: 'translate(-100%, 60%)', fontSize: '1.8rem', cursor: 'pointer' },
    navMenu: { display: 'grid', gridTemplateColumns: 'repeat(25, auto)', gridGap: '10px', listStyle: 'none', textAlign: 'center', width: '70vw', justifyContent: 'end', marginRight: '2rem' },
    navLinks: { color: 'rgb(29, 108, 182)', textDecoration: 'none', padding: '0.5rem 1rem' },
    navActive: { backgroundColor: 'rgb(255, 224, 83)', color: 'black', transition: 'all 0.2s ease-out' },
});

export default function Navbar() {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [lastItemActive, setLastItemActive] = useState('main');
    const [menuItemActive, setMenuItemActive] = useState({
        main: true,
        who: false,
        mission: false,
        shop: false,
        testimonial: false,
        event: false,
    });
    function handleClick(event) {
        const oldMenuItemsActive = menuItemActive;
        oldMenuItemsActive[event.target.id] = true;
        oldMenuItemsActive[lastItemActive] = false;
        setLastItemActive(event.target.id);
        setMenuItemActive(oldMenuItemsActive);
        setClicked(!clicked);
    }
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <nav className={classes.navBarItem}>
            <img src={logo} className={classes.navBarLogo} alt="Logo" />
            { isTabletOrMobile &&
                <div className={classes.menuIcon}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            }
            { isDesktopOrLaptop &&
                <ul className={classes.navMenu}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link 
                                    className={[classes.navLinks, menuItemActive[item.id] ? classes.navActive : ''].join(' ')} 
                                    to={item.url}
                                    id={item.id}
                                    onClick={(event) => handleClick(event)} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }
        </nav>
    );
}