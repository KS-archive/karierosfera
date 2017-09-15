import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import navigation from '../../../utils/content/navigation';
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
        {navigation.map(item => <MenuItem value={item.path} primaryText={item.name} />)}
      </StyledIconMenu>
    );
  }
}
