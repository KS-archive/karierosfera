import React, { Component } from 'react';
import { images } from '../../../utils/content/edycja_2017';
import { Container, Title, StyledSlider, Column, Image } from './Gallery_styles';

const RightArrow = props => (
  <i
    className="fa fa-chevron-right"
    aria-hidden="true"
    onClick={props.onClick}
  />
);

const LeftArrow = props => (
  <i
    className="fa fa-chevron-left"
    aria-hidden="true"
    onClick={props.onClick}
  />
);

export default class HeroCarousel extends Component {
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
    const settings = {
      infinite: true,
      pauseOnHover: true,
      autoplay: true,
      dots: true,
      arrows: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <RightArrow />,
      prevArrow: <LeftArrow />,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <Container>
        <Title>Galeria</Title>
        <StyledSlider {...settings}>
          {this.renderImages()}
        </StyledSlider>
      </Container>
    );
  }
}
