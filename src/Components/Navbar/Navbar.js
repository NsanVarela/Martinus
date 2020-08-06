import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import logo from './logo-martinus.svg'
import { Button } from '../Button';
import { Link } from "react-scroll";

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [lastItemActive, setLastItemActive] = useState('main');

    const [menuItemActive, setMenuItemActive] = useState({
        main: true,
        contact: false,
        shop: false,
        events: false,
        who: false,
    });

    function handleClick(event) {
        const oldMenuItemsActive = menuItemActive;
        oldMenuItemsActive[event.target.id] = true;
        oldMenuItemsActive[lastItemActive] = false;
        setLastItemActive(event.target.id);
        setMenuItemActive(oldMenuItemsActive);
        setClicked(!clicked);
    }

    return (
        <nav className="NavbarItems">
            <img src={logo} className="navbar-logo" alt="Logo" />
            <div className="menu-icon">
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                                className={['nav-links', menuItemActive[item.id] ? 'nav-active' : ''].join(' ')} 
                                to={item.url}
                                id={item.id}
                                onClick={(event) => handleClick(event)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Button>Sign up</Button>
        </nav>
    );
}