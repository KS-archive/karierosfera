import React, { Component } from 'react';
import { Container, Contact, ContactImage, TopLabel, BottomLabel, Label, Image} from './ContactSection_styles';

export default class ContactSection extends Component {

  render() {
    return (
      <Container>
        <Contact>
          <TopLabel>Skontaktuj się z nami</TopLabel>
          <BottomLabel>Chętnie przedstawimy warunki współpracy</BottomLabel>
        </Contact>
        <ContactImage>
          <Image background="/img/partnerzy2017/003-chat.svg"></Image>
          <Label>Kontakt</Label>
        </ContactImage>
      </Container>
    );
  }
}
