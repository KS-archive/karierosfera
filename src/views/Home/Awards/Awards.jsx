import React, { Component } from 'react';
import { Container, ContentWrapper, Image, Title, Content } from './Awards_styles';

export default class Awards extends Component {
  render() {
    return (
      <Container>
        <ContentWrapper>
          <Title>Nagrody</Title>
          <Content>
            <strong>Karierosfera to prestiżowy, organizowany od kilkunastu lat ogólnopolski konkurs wiedzy biznesowej podzielony na wyspecjalizowane dziedziny. Każdy student może sprawdzić swoją wiedzę z tej dziedziny, która najbardziej mu odpowiada.</strong>
            <br />Test internetowy, test pisemny i case study – tylko tyle dzieli uczestnika Karierosfery od osiągnięcia wymarzonego, zawodowego celu.
            <br />Nagrodą główną są płatne staże w renomowanych i cenionych firmach, dzięki którym laureaci zyskają ogromne możliwości rozwoju oraz zdobycia cennego doświadczenia. Przede wszystkim jednak mają okazję zaprezentować się przedstawicielom prestiżowych firm podczas Gali Finałowej Konkursu.
          </Content>
        </ContentWrapper>
        <Image src="/img/o_konkursie/nagroda.svg" alt="Grafika prezentująca trofeum" />
      </Container>
    );
  }
}
