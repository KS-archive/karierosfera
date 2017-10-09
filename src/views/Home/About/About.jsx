import React, { Component } from 'react';
import { Container, ContentWrapper, Image, Title, Content } from './About_styles';

export default class About extends Component {
  render() {
    return (
      <Container>
        <ContentWrapper>
          <Title>O konkursie</Title>
          <Content>
            <strong>Karierosfera to Twoja szansa na postawienie pierwszych kroków w karierze zawodowej.</strong>
            <br />Podczas 3 etapów zmagań w wybranej dziedzinie, studenci z całej Polski rywalizują o płatny staż.
            <br />Realizacja stażu pozwala rozpocząć karierę zawodową z doświadczeniem cenionym podczas procesu rekrutacji. Co roku współpracujemy z renomowanymi firmami, aby dać uczestnikom okazję czerpania dobrych praktyk od najlepszych pracodawców oraz aby CV laureata Karierosfery wyróżniało się na tle innych.
          </Content>
        </ContentWrapper>
        <Image src="/img/o_konkursie/stopy.svg" alt="Grafika prezentująca kroki" />
      </Container>
    );
  }
}
