import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import Hero from './Hero/Hero';
import Welcome from './Welcome/Welcome';
import AmbassadorsProgram from './AmbassadorsProgram/AmbassadorsProgram';
import Benefits from './Benefits/Benefits';
import AmbassadorsFaq from './AmbassadorsFaq/AmbassadorsFaq';
import Contact from './Contact/Contact';
import ApplicationForm from './ApplicationForm/ApplicationForm';

export default class Ambassadors extends Component {
  scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 500,
      smooth: true,
      offset: -150,
    });
  }

  render() {
    return (
      <div>
        <Hero />
        <Welcome scrollTo={this.scrollTo} />
        <Element name="Program Ambasadorski">
          <AmbassadorsProgram />
        </Element>
        <Element name="Korzyści">
          <Benefits />
        </Element>
        <Element name="FAQ">
          <AmbassadorsFaq />
        </Element>
        <Contact />
        <Element name="Zapisz się">
          <ApplicationForm />
        </Element>
      </div>
    );
  }
}
