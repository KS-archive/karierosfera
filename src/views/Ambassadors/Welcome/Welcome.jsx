import React, { Component } from 'react';
import { Container, StyledContainer, Buttons, Button, Content, Header, Text, Subheader, List, Listitem } from './Welcome_styles';

export default class Welcome extends Component {
  listItems = ['Zdobądź doświadczenie', 'Rozwiń umiejętności', 'Odbierz nagrody', 'Podrasuj CV', <strong>Rozkręć swoją karierę</strong>];

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
            <Header>Zrób sobie Karierosferę!</Header>
            <Text>
            Karierosfera to ogólnopolski konkurs wiedzy biznesowej skierowany do studentów. Jego organizacja wymaga zaangażowania osób z kilkunastu miast Polski.
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
