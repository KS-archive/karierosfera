import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Numbers from './Numbers/Numbers';
import Internships from './Internships/Internships';
import Steps from './Steps/Steps';
import Areas from './Areas/Areas';
import Partners from './Partners/Partners';
import BigButton from './BigButton/BigButton';
import { Container } from '../../utils/constants/styledComponents';

export default class Edition2018 extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Container>
          <Numbers />
          <Internships />
          <Steps />
          <Areas />
          <Partners />
          <BigButton />
        </Container>
      </div>
    );
  }
}
