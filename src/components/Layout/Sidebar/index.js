import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="main">accueil</SidebarLink>
          <SidebarLink to="who">qui sommes-nous ?</SidebarLink>
          <SidebarLink to="missions">missions</SidebarLink>
          <SidebarLink to="shop">boutique solidaire</SidebarLink>
          <SidebarLink tto="testimonies">témoignages</SidebarLink>
          <SidebarLink to="events">évènements</SidebarLink>
          <SidebarLink to="contact">nous contacter</SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
