import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Contact, ContactImage, TopLabel, BottomLabel, Label, ImageContainer, Image } from './ContactSection_styles';

@withRouter
export default class ContactSection extends Component {
  render() {
    return (
      <Container>
        <Contact>
          <TopLabel>Skontaktuj się z nami</TopLabel>
          <BottomLabel>Chętnie przedstawimy warunki współpracy</BottomLabel>
        </Contact>
        <ContactImage onClick={() => { this.props.history.push('/kontakt'); }}>
          <ImageContainer>
            <Image src="/img/partnerzy2017/003-chat.svg" />
          </ImageContainer>
          <Label>Kontakt</Label>
        </ContactImage>
      </Container>
    );
  }
}
