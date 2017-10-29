import React, { Component } from 'react';
import { companySection } from '../../../utils/content/partnerzy';
import { Container, Title, Companies, Logo } from './CompanySection_styles';

export default class CompanySection extends Component {
  renderLogo = (logoData, index) => <Logo key={index} src={logoData.logo} />

  render() {
    return (
      <Container>
        <Title>{companySection.title}</Title>
        <Companies>
          {companySection.companies.map(this.renderLogo)}
        </Companies>
      </Container>
    );
  }
}
