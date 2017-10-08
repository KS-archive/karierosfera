import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Container, Title, DesktopImage, MobileImage } from './Steps_styles';

export default class Steps extends Component {
  render() {
    return (
      <Container>
        <Title>10 kroków do rozpoczęcia kariery</Title>
        <MediaQuery minWidth={721}>
          <DesktopImage src="/img/o_konkursie/10 kroków wer2.svg" />
        </MediaQuery>
        <MediaQuery maxWidth={720}>
          <MobileImage src="/img/o_konkursie/10 kroków mobile wer2.svg" />
        </MediaQuery>
      </Container>
    );
  }
}
