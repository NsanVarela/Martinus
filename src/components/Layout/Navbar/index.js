import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="main">accueil</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="who">qui sommes-nous ?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="missions">missions</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="shop">boutique solidaire</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="testimonies">témoignages</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="events">évènements</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">nous contacter</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
