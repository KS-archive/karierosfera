import React, { Component } from 'react';
import { Container, ContentWrapper, Image, Title, Content } from './Awards_styles';

export default class Awards extends Component {
  render() {
    return (
      <Container>
        <ContentWrapper>
          <Title>Nagrody</Title>
          <Content>
            <strong>Główną nagrodą w konkursie jest płatny staż w firmie patronującej dziedzinę.</strong>
            <br />Dla finalistów przewidziane są również wartościowe nagrody rzeczowe oraz pieniężne.
            <br />Cenne jest również zdobywane doświadczenie i wiedza.  Podchodząc do konkursu uczestnik poznaje oczekiwania firm względem potencjalnych pracowników.
          </Content>
        </ContentWrapper>
        <Image src="/img/o_konkursie/nagroda.svg" alt="Grafika prezentująca trofeum" />
      </Container>
    );
  }
}
