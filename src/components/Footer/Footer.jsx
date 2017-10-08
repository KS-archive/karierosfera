import React, { Component } from 'react';
import { Container, Copyrights, Logo } from './Footer_styles';

export default class Footer extends Component {
  openWiggorSite = () => {
    window.open('https://www.wiggor.pl/', '_blank');
  }

  render() {
    return (
      <Container>
        <Copyrights>© Wszelkie Prawa Zastrzeżone 2017 Karierosfera. Organizatorem konkursu jest Stowarzyszenie Studenckie WIGGOR</Copyrights>
        <Logo src="/img/logo Wiggor biale.png" alt="Logo Stowarzyszenia Studenckiego WIGGOR" onClick={this.openWiggorSite} />
      </Container>
    );
  }
}
