import React, { Component } from 'react';
import { Container, Wrapper, Num, Val } from './Numbers_styles';

const Number = ({ num, val }) => (
  <Wrapper>
    <Num>{num}</Num>
    <Val>{val}</Val>
  </Wrapper>
);

export default () => (
  <Container>
    <Number num="3" val="etapy" />
    <Number num="6" val="dziedzin" />
    <Number num="13" val="miast" />
    <Number num="18" val="edycja" />
  </Container>
);
