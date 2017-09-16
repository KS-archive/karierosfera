import React, { Component } from 'react';
import settings from './slider.config';
import { images } from '../../../utils/content/edycja_2017';
import { Container, StyledTitle, StyledSlider, Column, Image } from './Gallery_styles';

export default class Gallery extends Component {
  renderImages = () => images.map((image, index) => {
    if (index % 2 === 0) {
      return (
        <Column key={image}>
          <Image backgroundImg={image} />
          <Image backgroundImg={images[index + 1]} />
        </Column>
      );
    }
    return null;
  });

  render() {
    return (
      <Container>
        <StyledTitle>Galeria</StyledTitle>
        <StyledSlider {...settings}>
          {this.renderImages()}
        </StyledSlider>
      </Container>
    );
  }
}
