import React, { Component } from 'react';
import TabSection from '../../../components/TabSection/TabSection';
import { Container, Tile, Image, Data, Title, Description } from './Areas_styles';

export const Area = ({ icon, title, description }) => (
  <Tile>
    <Image src={icon} />
    <Data>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Data>
  </Tile>
);

export default () => (
  <TabSection title="Dziedziny 2018">
    <Container>
      <Area
        icon="/img/edycja_2018/dziedziny/ikonka-07.png"
        title="Marketing"
        description="Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, "
      />
      <Area
        icon="/img/edycja_2018/dziedziny/ikonka-08.png"
        title="Prawo"
        description="Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, "
      />
      <Area
        icon="/img/edycja_2018/dziedziny/ikonka-09.png"
        title="Audyt"
        description="Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, "
      />
      <Area
        icon="/img/edycja_2018/dziedziny/ikonka-11.png"
        title="Business Intelligence"
        description="Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, "
      />
      <Area
        icon="/img/edycja_2018/dziedziny/ikonka-12.png"
        title="Strategia i Doradztwo Biznesowe"
        description="Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, "
      />
      <Area
        icon="/img/edycja_2018/dziedziny/ikonka-10.png"
        title="Financial Markets"
        description="Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, Długi opis dziedziny, "
      />
    </Container>
  </TabSection>
);
