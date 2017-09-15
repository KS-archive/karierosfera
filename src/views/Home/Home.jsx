import React, { Component } from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import { Header } from './Home_styles';

export default class Home extends Component {
  changeRoute = (route) => {
    this.props.history.push(route);
  }

  render() {
    return (
      <HeroCarousel changeRoute={this.changeRoute} />
    );
  }
}
