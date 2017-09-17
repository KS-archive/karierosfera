import React, { Component } from 'react';
import { Container, StyledContainer, Buttons, Button, Content, Header, Text, Subheader, List, Listitem } from './Welcome_styles';

export default class Welcome extends Component {
  listItems = ['Zdobądź doświadczenie', 'Rozwiń umiejętności', 'Odbierz nagrody', 'Podrasuj CV', 'Rozkręć swoją karierę'];

  renderButton = (label, type) => (
    <Button
      primary={type === 'primary'}
      secondary={type === 'secondary'}
      label={label}
      onClick={() => { this.props.scrollTo(label); }}
    />
  );

  render() {
    return (
      <Container background="/img/dla_ambasadorow/1804.jpg">
        <StyledContainer>
          <Buttons>
            {this.renderButton('Program Ambasadorski', 'primary')}
            {this.renderButton('Korzyści', 'primary')}
            {this.renderButton('FAQ', 'primary')}
            {this.renderButton('Zapisz się', 'secondary')}
          </Buttons>
          <Content>
            <Header>Cześć!</Header>
            <Text>
              Karierosfera to szansa nie tylko dla uczestników. Ze względu na ogólnopolską skalę projektu co roku korzystamy z pomocy Ambasadorów Karierosfery, którzy we współpracy ze sztabem konkursu koordynują jego organizacją w miastach partnerskich.
            </Text>
            <Subheader>Chcesz być jedną z nich?</Subheader>
            <List pointSrc="/img/dla_ambasadorow/listPoint.png">
              {this.listItems.map(item => <Listitem key={item}>{item}</Listitem>)}
            </List>
          </Content>
        </StyledContainer>
      </Container>
    );
  }
}
