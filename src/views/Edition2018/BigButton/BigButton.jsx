import React from 'react';
import TabSection from '../../../components/TabSection/TabSection';
import { Container, BoldText, Text, Button } from './BigButton_styles';

export default () => (
  <TabSection title="Weź udział!">
    <Container>
      <BoldText>{'Nie czekaj - udział jest bezpłatny, więc nic nie stracisz! ;)'}</BoldText>
      <Text>Spróbuj wycisnąć z siebie co najlepsze w wybranej dziedzinie i zawalcz o płatny staż, oszczędzając sobie przejścia przez proces rekrutacyjny.</Text>
      <Button href="#">Zgłoś się!</Button>
    </Container>
  </TabSection>
);
