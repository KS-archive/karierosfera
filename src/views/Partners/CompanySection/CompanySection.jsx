import React, { Component } from 'react';
import { Container, Title, Companies, Logo} from './CompanySection_styles';

export default class CompanySection extends Component {

  render() {
    return (
      <Container>
        <Title>Co roku wspołpracujemy z renomowanymi firmami - dołącz do grona marek, które nam zaufały.</Title>
        <Companies>
          <Logo background="/img/partnerzy2017/audyt.png" ></Logo><Logo background="/img/partnerzy2017/bi.png"></Logo><Logo background="/img/partnerzy2017/prawo_podatki.png"></Logo><Logo background="/img/partnerzy2017/marketing.png"></Logo>
        </Companies>
      </Container>
    );
  }
}
