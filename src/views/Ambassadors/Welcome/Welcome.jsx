import React, { Component } from 'react';
import { Container, StyledContainer, Buttons, Button, Content, Header, Text, Subheader, List, Listitem } from './Welcome_styles';

export default class Welcome extends Component {
  render() {
    return (
      <Container background="/img/dla_ambasadorow/1804.jpg">
        <StyledContainer>
          <Buttons>
            <Button primary label="Program Ambasadorski" />
            <Button primary label="Korzyści" />
            <Button primary label="FAQ" />
            <Button secondary label="Zapisz się" />
          </Buttons>
          <Content>
            <Header>Cześć!</Header>
            <Text>
              Karierosfera to szansa nie tylko dla uczestników. Ze względu na ogólnopolską skalę projektu co roku korzystamy z pomocy Ambasadorów Karierosfery, którzy we współpracy ze sztabem konkursu koordynują jego organizacją w miastach partnerskich.
            </Text>
            <Subheader>Chcesz być jedną z nich?</Subheader>
            <List pointSrc="/img/dla_ambasadorow/listPoint.png">
              <Listitem>Zdobądź doświadczenie</Listitem>
              <Listitem>Rozwiń umiejętności</Listitem>
              <Listitem>Odbierz nagrody</Listitem>
              <Listitem>Podrasuj CV</Listitem>
              <Listitem>Rozkręć swoją karierę</Listitem>
            </List>
          </Content>
        </StyledContainer>
      </Container>
    );
  }
}
