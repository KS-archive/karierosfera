import React, { Component } from 'react';
import { Header } from './Partners_styles';
import CompanySection from './CompanySection/CompanySection';
import MapSection from './MapSection/MapSection';
import GridSection from './GridSection/GridSection';
import LastEditionSection from './LastEditionSection/LastEditionSection';
import Participant from './Participant/Participant';
import ContactSection from './ContactSection/ContactSection';

export default class Partners extends Component {
  render() {
    return (
      <Header>
        <CompanySection />
        <MapSection />
        <GridSection />
        <LastEditionSection />
        <Participant />
        <ContactSection />
      </Header>
    );
  }
}
