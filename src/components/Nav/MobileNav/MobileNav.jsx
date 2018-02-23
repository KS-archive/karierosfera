import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import navigation from '../../../utils/content/navigation';
import { StyledIconMenu, StyledIconButton } from './MobileNav_styles';


@withRouter
export default class MobileNav extends Component {
  handleSelect = (e, child) => {
    this.props.history.push(child.props.value);
  };

  static getWithChilds(item) {
    return item.childs.map(child => <MenuItem key={child.path} value={child.path} primaryText={child.name} />)
  }

  render() {
    const origin = { horizontal: 'right', vertical: 'top' };
    const iconButtonElement = (
      <StyledIconButton>
        <i className="fa fa-bars" aria-hidden="true" />
      </StyledIconButton>
    );

    return (
      <StyledIconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={origin}
        targetOrigin={origin}
        onItemTouchTap={this.handleSelect}
      >
        {navigation.map(item => {
          return item.childs ? (
            MobileNav.getWithChilds(item)
          ) : (
            <MenuItem key={item.path} value={item.path} primaryText={item.name} />
          )
        })}
      </StyledIconMenu>
    );
  }
}
