import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import { slides } from '../../../utils/content/strona_glowna';
import { StyledSlider, Item, Header, Button } from './HeroCarousel_styles';

export default class HeroCarousel extends Component {
  handleLink = (link) => {
    if (link.includes('/')) {
      this.props.changeRoute(link);
    } else {
      scroller.scrollTo(window.innerHeight);
    }
  }

  renderSlide = (slide) => {
    return (
      <Item backgroundSrc={slide.backgroundSrc} key={slide.buttonLink}>
        <Header>{slide.header}</Header>
        <Button
          label={slide.buttonLabel}
          onClick={() => { this.handleLink(slide.buttonLink); }}
          primary
        />
      </Item>
    );
  }

  render() {
    return (
      <StyledSlider infinite pauseOnHover autoplay dots autoplaySpeed={5000}>
        {slides.map(slide => this.renderSlide(slide))}
      </StyledSlider>
    );
  }
}
