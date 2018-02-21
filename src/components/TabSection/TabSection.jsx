import React from 'react';
import { Container, Tab, Line, Wrapper } from './TabSection_styles';

export default ({ title, children }) => (
  <Container>
    <Tab>{title}</Tab>
    <Line />
    <Wrapper>{children}</Wrapper>
  </Container>
);
