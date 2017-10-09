import React, { Component } from 'react';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { Container, Title, Content, CallToAction } from './Divider_styles';

export default class Divider extends Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <Title>Zastanawiasz się czy Karierosfera jest dla Ciebie? Oczywiście że tak!</Title>
          <Content>
            W całej Polsce, na każdej uczelni studiują dokładnie tacy studenci, jak Ty. Obiecują sobie systematyczną naukę, a potem zarywają noc przed egzaminem. Oglądają serial. Cały. Odcinek po odcinku. W jeden dzień. Planują prowadzić zdrowy tryb życia, a potem imprezują do białego rana i objadają się fastfoodami.
            <br />
            <strong>Studia to czas doświadczania. Zbieraj więc doświadczenia, również zawodowe.</strong>
          </Content>
          <CallToAction>Weź udział w Karierosferze!</CallToAction>
        </MainContainer>
      </Container>
    );
  }
}
