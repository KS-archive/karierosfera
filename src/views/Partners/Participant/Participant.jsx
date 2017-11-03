import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Container, Header, Title, Subtitle, Image } from './Participant_styles';

export default class Participant extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Uczestnik Karierosfery</Title>
          <Subtitle>Charakterystyka typowego przedstawiciela naszej grupy docelowej.</Subtitle>
        </Header>
        <MediaQuery minWidth={960}>
          <Image src="/img/partnerzy2017/uczestnik wektor.svg" />
        </MediaQuery>
        <MediaQuery maxWidth={959}>
          <Image src="/img/partnerzy2017/uczestnik wektor mobile.svg" />
        </MediaQuery>
      </Container>
    );
  }
}
