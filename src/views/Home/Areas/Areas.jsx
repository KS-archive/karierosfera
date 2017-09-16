import React, { Component } from 'react';
import { areas } from '../../../utils/content/strona_glowna';
import { Container, Title, AreasList, Area, AreaIcon, AreaName } from './Areas_styles';

export default class Areas extends Component {
  renderArea = area => (
    <Area key={area.name}>
      <AreaIcon src={area.icon} alt={`Ikkona dziedziny ${area.name}`} />
      <AreaName>{area.name}</AreaName>
    </Area>
  );

  render() {
    return (
      <Container>
        <Title>Przykładowe dziedziny konkursowe:</Title>
        <AreasList>
          {areas.map(area => this.renderArea(area))}
        </AreasList>
      </Container>
    );
  }
}
