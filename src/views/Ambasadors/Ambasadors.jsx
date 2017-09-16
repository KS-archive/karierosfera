import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Welcome from './Welcome/Welcome';
import AmbassadorsProgram from './AmbassadorsProgram/AmbassadorsProgram';

export default class Ambasadors extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Welcome />
        <AmbassadorsProgram />
      </div>
    );
  }
}
