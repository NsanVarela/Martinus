import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="main" onClick={toggle}>
            Accueil
          </SidebarLink>
          <SidebarLink to="who" onClick={toggle}>
            Qui sommes-nous ?
          </SidebarLink>
          <SidebarLink to="missions" onClick={toggle}>
            Missions
          </SidebarLink>
          <SidebarLink to="shop" onClick={toggle}>
            Boutique solidaire
          </SidebarLink>
          <SidebarLink tto="testimonies" onClick={toggle}>
            Témoignages
          </SidebarLink>
          <SidebarLink to="events" onClick={toggle}>
            Évènements
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Nous contacter
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
