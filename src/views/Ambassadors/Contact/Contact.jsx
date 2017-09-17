import React, { Component } from 'react';
import { contact } from '../../../utils/content/ambasadorzy';
import { Container, Title, Content, ContactElements, Element, Icon, TextWrapper, Name, Email } from './Contact_styles';

export default class Contact extends Component {
  renderContact = (element) => {
    const { icon, name, email } = element;
    return (
      <Element key={email}>
        <Icon src={icon} />
        <TextWrapper>
          <Name>{name}</Name>
          <Email href={`mailto:${email}`} target="_top">{email}</Email>
        </TextWrapper>
      </Element>
    );
  }

  render() {
    return (
      <Container>
        <Title>Masz wątpliwości?</Title>
        <Content>Skontaktuj się z nami, z chęcią odpowiemy na wszystkie pytania!</Content>
        <ContactElements>
          {contact.map(element => this.renderContact(element))}
        </ContactElements>
      </Container>
    );
  }
}
