import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Welcome from './Welcome/Welcome';
import { Header } from './Ambasadors_styles';

export default class Ambasadors extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Welcome />
      </div>
    );
  }
}
