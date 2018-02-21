import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Numbers from './Numbers/Numbers';
import { Container } from '../../utils/constants/styledComponents';

export default class Edition2018 extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Container>
          <Numbers />
        </Container>
      </div>
    );
  }
}
