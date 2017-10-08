import React, { Component } from 'react';
import { numbers } from '../../../utils/content/partnerzy';
import { Container, TopLabel, GridContainer, Cell, CellNumberLabel, CellDescription } from './LastEditionSection_styles';

export default class ContactSection extends Component {
  renderNumber = numberData => (
    <Cell>
      <CellNumberLabel>{numberData.number}</CellNumberLabel>
      <CellDescription>{numberData.description}</CellDescription>
    </Cell>
  );

  render() {
    return (
      <Container>
        <TopLabel>Poprzednia edycja w liczbach</TopLabel>
        <GridContainer>
          {numbers.map(this.renderNumber)}
        </GridContainer>
      </Container>
    );
  }
}
