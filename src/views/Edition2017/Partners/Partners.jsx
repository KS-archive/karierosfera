import React, { Component } from 'react';
import { partners } from '../../../utils/content/edycja_2017';
import { Title } from '../../../utils/constants/styledComponents';
import { Container, PartnersList, Partner, Logo, Name, Area, Description } from './Partners_styles';

export default class Partners extends Component {
  renderPartner = (partner) => {
    const { imageSrc, name, area, description } = partner;
    return (
      <Partner>
        <Logo src={imageSrc} alt={`Logo firmy ${name}`} />
        <Name>{name}</Name>
        <Area>{area}</Area>
        <Description>{description}</Description>
      </Partner>
    );
  }

  render() {
    return (
      <Container>
        <Title>Partnerzy</Title>
        <PartnersList>
          {partners.map(partner => this.renderPartner(partner))}
        </PartnersList>
      </Container>
    );
  }
}
