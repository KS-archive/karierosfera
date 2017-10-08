import React, { Component } from 'react';
import { Container, Text, MapImg, MajorLabel, MinorLabel } from './MapSection_styles';


export default class MapSection extends Component {
  render() {
    return (
      <Container>
        <Text>
          <MajorLabel>Karierosfera to największy w Polsce konkurs wiedzy biznesowej skierowany do studentów.</MajorLabel>
          <MinorLabel>Karierosfera to największy w Polsce konkurs wiedzy biznesowej skierowany do studentów.</MinorLabel>
        </Text>
        <MapImg background="/img/partnerzy2017/mapa_polski.svg" />
      </Container>
    );
  }
}
