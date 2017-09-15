import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import { StyledIconMenu, StyledIconButton } from './MobileNav_styles';

@withRouter
export default class MobileNav extends Component {
  handleSelect = (e, child) => {
    this.props.history.push(child.props.value);
  }

  render() {
    return (
      <StyledIconMenu
        iconButtonElement={<StyledIconButton><i className="fa fa-bars" aria-hidden="true" /></StyledIconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        onItemTouchTap={this.handleSelect}
      >
        <MenuItem value="/" primaryText="Strona główna" />
        <MenuItem value="/edycja2017" primaryText="Edycja 2017" />
        <MenuItem value="/edycja2018" primaryText="Edycja 2018" />
        <MenuItem value="/program_ambasadorski" primaryText="Dla ambasadorów" />
        <MenuItem value="/partnerzy" primaryText="Dla partnerów" />
        <MenuItem value="/faq" primaryText="FAQ" />
        <MenuItem value="/contact" primaryText="Kontakt" />
      </StyledIconMenu>
    );
  }
}
