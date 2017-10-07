import React, { Component } from 'react';
import { Container, TextMap, Map, MajorLabel, MinorLabel} from './MapSection_styles';


export default class MapSection extends Component {

  render() {
    return (
      <Container>
        <TextMap>
          <MajorLabel>Karierosfera to największy w Polsce konkurs wiedzy biznesowej skierowany do studentow.</MajorLabel>
          <MinorLabel>Karierosfera to największy w Polsce konkurs wiedzy biznesowej skierowany do studentow.</MinorLabel>
        </TextMap>
        <Map background="/img/partnerzy2017/mapa_polski.svg"></Map>
      </Container>
    );
  }
}
