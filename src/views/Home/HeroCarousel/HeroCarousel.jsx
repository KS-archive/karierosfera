import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { animateScroll } from 'react-scroll';
import { slides } from '../../../utils/content/strona_glowna';
import { StyledSlider, Item, Header, Button } from './HeroCarousel_styles';

@withRouter
export default class HeroCarousel extends Component {
  handleLink = (link) => {
    if (link.includes('/')) {
      this.props.history.push(link);
    } else {
      animateScroll.scrollTo(window.innerHeight);
    }
  }

  renderSlide = (slide) => {
    const { backgroundSrc, buttonLink, header, buttonLabel } = slide;
    return (
      <Item backgroundSrc={backgroundSrc} key={buttonLink}>
        <Header>{header}</Header>
        <Button
          label={buttonLabel}
          onClick={() => { this.handleLink(buttonLink); }}
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
