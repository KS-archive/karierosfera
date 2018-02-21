import React from 'react';
import TabSection from '../../../components/TabSection/TabSection';
import { Container, Step, Number, Icon, Dates, Text } from './Steps_styles';

export default () => (
  <TabSection title="Etapy 2018">
    <Container>
      <Step>
        <Number>I etap</Number>
        <Icon src="/img/edycja_2018/etapy/ikonka-15.png" />
        <Dates>25 lutego - 14 marca</Dates>
        <Text>
          <span>Test online</span> składający się z <span>15 pytań zamkniętych</span> z wybranej dziedziny.
      </Text>
      </Step>
      <Step>
        <Number>II etap</Number>
        <Icon src="/img/edycja_2018/etapy/ikonka-01.png" />
        <Dates>22 marca</Dates>
        <Text>
          <span>Test pisemny</span> składający się z <span>50 pytań zamkniętych,</span> układanych przez firmy.
      </Text>
      </Step>
      <Step>
        <Number>III etap</Number>
        <Icon src="/img/edycja_2018/etapy/ikonka-14.png" />
        <Dates>13 kwietnia</Dates>
        <Text>
          <span>Case study</span> we Wrocławiu, nad którego przebiegiem czuwają firmy partnerskie.
      </Text>
      </Step>
    </Container>
  </TabSection>
);
