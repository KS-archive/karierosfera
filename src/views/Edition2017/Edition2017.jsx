import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import Partners from './Partners/Partners';
import { Container } from '../../utils/constants/styledComponents';

export default class Edition2017 extends Component {
  render() {
    return (
      <Container>
        <Gallery />
        <Partners />
      </Container>
    );
  }
}
