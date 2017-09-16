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
            Nagrodą główną są płatne staże w renomowanych i cenionych firmach, dzięki którym laureaci zyskają ogromne możliwości rozwoju oraz zdobycia cennego doświadczenia. Przede wszystkim jednak mają okazję zaprezentować się przedstawicielom prestiżowych firm podczas Gali Finałowej Konkursu.
            <br />
            <strong>Studia to czas doświadczania. Zbieraj więc doświadczenia, również zawodowe.</strong>
          </Content>
          <CallToAction>Weź udział w Karierosferze!</CallToAction>
        </MainContainer>
      </Container>
    );
  }
}
