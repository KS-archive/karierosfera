import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StyledFlatButton from './DesktopNav_styles';

export default class DesktopNav extends Component {
  render() {
    return (
      <span>
        <Link to="/"><StyledFlatButton label="Strona główna" /></Link>
        <Link to="/edycja2017"><StyledFlatButton label="Edycja 2017" /></Link>
        <Link to="/edycja2018"><StyledFlatButton label="Edycja 2018" /></Link>
        <Link to="/program_ambasadorski"><StyledFlatButton label="Dla ambasadorów" /></Link>
        <Link to="/partnerzy"><StyledFlatButton label="Dla partnerów" /></Link>
        <Link to="/faq"><StyledFlatButton label="FAQ" /></Link>
        <Link to="/contact"><StyledFlatButton label="Kontakt" /></Link>
      </span>
    );
  }
}
