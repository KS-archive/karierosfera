import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Welcome from './Welcome/Welcome';
import AmbassadorsProgram from './AmbassadorsProgram/AmbassadorsProgram';
import Benefits from './Benefits/Benefits';
import AmbassadorsFaq from './AmbassadorsFaq/AmbassadorsFaq';
import Contact from './Contact/Contact';
import ApplicationForm from './ApplicationForm/ApplicationForm';

export default class Ambassadors extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Welcome />
        <AmbassadorsProgram />
        <Benefits />
        <AmbassadorsFaq />
        <Contact />
        <ApplicationForm />
      </div>
    );
  }
}
