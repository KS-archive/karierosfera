import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Welcome from './Welcome/Welcome';
import AmbassadorsProgram from './AmbassadorsProgram/AmbassadorsProgram';
import Benefits from './Benefits/Benefits';

export default class Ambassadors extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Welcome />
        <AmbassadorsProgram />
        <Benefits />
      </div>
    );
  }
}
