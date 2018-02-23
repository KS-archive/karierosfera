import styled from 'styled-components';
import { FlatButton, FontIcon, MenuItem } from 'material-ui';
import { appBarHeight } from '../../../utils/constants/styles';
import Dropdown from '../../Dropdown/Dropdown';

export const StyledFlatButton = styled(FlatButton)`
  min-height: ${appBarHeight}px;
  color: #fff !important;
`;

export const StyledFlatButtonChild = styled(FlatButton)`
  width: 100%;
  color: #fff !important;
`;


export const StyledFontIcon = styled(FontIcon)`
  color: #fff !important;
`;


export const StyledDropdown = styled(Dropdown)`
  display: inline !important;
`;
StyledDropdown.propTypes = Dropdown.propTypes;
StyledDropdown.defaultProps = Dropdown.defaultProps;

export const StyledDropdownMenuWrapper = styled(Dropdown.MenuWrapper)`
  margin-top: 60px;
`;
StyledDropdown.propTypes = Dropdown.propTypes;
StyledDropdown.defaultProps = Dropdown.defaultProps;

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  margin-top: 60px;
  background-color: #000 !important;
  border: 0;
  padding: 0;
`;
StyledDropdownMenu.propTypes = Dropdown.Menu.propTypes;
StyledDropdownMenu.defaultProps = Dropdown.Menu.defaultProps;


export const StyledMenuItem = styled(MenuItem)`
  color: #fff !important;
  padding: 0;
  margin: 0;
  > div > div {
    padding: 0 !important;
    margin: 0 !important;
  }
`;
StyledMenuItem.propTypes = MenuItem.propTypes;
StyledMenuItem.defaultProps = MenuItem.defaultProps;


export const StyledDropdownToggle = styled(Dropdown.Toggle)`
  min-height: ${appBarHeight}px;
  float: none !important;
  background-color: transparent !important;
  color: #fff !important;
  background-image: none;
  border: 0;
  text-transform: uppercase;
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
  vertical-align: middle;
  letter-spacing: 0;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: rgba(153, 153, 153, 0.2) !important;
    color: #fff !important;
    background-image: none;
    border: 0;
  }
  > span {
    border-top-color: white !important;
  }
`;
StyledDropdownToggle.propTypes = Dropdown.Toggle.propTypes;
StyledDropdownToggle.defaultProps = Dropdown.Toggle.defaultProps;

