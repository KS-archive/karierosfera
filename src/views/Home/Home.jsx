import React, { Component } from 'react';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import About from './About/About';
import Stages from './Stages/Stages';
import Awards from './Awards/Awards';
import Steps from './Steps/Steps';
import FirstStep from './FirstStep/FirstStep';
import Divider from './Divider/Divider';
import Areas from './Areas/Areas';
import { Container } from '../../utils/constants/styledComponents';
import 'autotrack'

ga('create', 'GTM-NM7RXM, 'auto');

ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');

ga('send', 'pageview');
export default class Home extends Component {
  changeRoute = (route) => {
    this.props.history.push(route);
  }

  render() {
    return (
      <div>
        <HeroCarousel changeRoute={this.changeRoute} />
        <Container>
          <About />
          <Stages />
          <Awards />
          <Steps />
          <FirstStep />
        </Container>
        <Divider />
        <Container>
          <Areas />
        </Container>
      </div>
    );
  }
}
