import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigation from '../../../utils/content/navigation';
import {
  StyledDropdownMenu,
  StyledDropdownToggle,
  StyledFlatButton,
  StyledFontIcon,
  StyledMenuItem,
  StyledDropdown,
  StyledDropdownMenuWrapper,
  StyledFlatButtonChild,
} from './DesktopNav_styles';


export default class DesktopNav extends Component {
  static renderMenuItem(child) {
    return (
      <StyledMenuItem key={child.name}>
        <Link to={child.path}>
          <StyledFlatButtonChild label={child.name} />
        </Link>
      </StyledMenuItem>
    );
  }
  render() {
    return (
      <span>
        {navigation.map(item => (
          item.childs ? (
            <StyledDropdown key={item.name}>
              <StyledDropdownToggle title={item.name} />
              <StyledDropdownMenuWrapper />
              <StyledDropdownMenu>
                {item.childs.map(child => DesktopNav.renderMenuItem(child))}
              </StyledDropdownMenu>
            </StyledDropdown>
          ) : (
            <Link key={item.name} to={item.path}>
              <StyledFlatButton
                label={item.name}
                labelPosition="before"
                icon={
                  item.path ? '' : <StyledFontIcon className="fa fa-caret-down" aria-hidden="true" />
                }
              />
            </Link>
          )
        ))}
      </span>
    );
  }
}
