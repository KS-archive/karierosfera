import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MobileNav from './MobileNav/MobileNav';
import DesktopNav from './DesktopNav/DesktopNav';
import { StyledAppBar, Filler } from './Nav_styles';

const IconElementRight = () => (
  <span>
    <MediaQuery minWidth={1100}><DesktopNav /></MediaQuery>
    <MediaQuery maxWidth={1099}><MobileNav /></MediaQuery>
  </span>
);

export default class Nav extends Component {
  render() {
    return (
      <div>
        <StyledAppBar
          title={<img src="/img/logo-biale.png" alt="Logo Stowarzyszenia WIGGOR" />}
          showMenuIconButton={false}
          iconElementRight={<IconElementRight handleSelect={this.handleSelect} />}
        />
        <Filler />
      </div>
    );
  }
}
