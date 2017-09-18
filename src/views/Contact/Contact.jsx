import React, { Component } from 'react';
import Emails from './Emails/Emails';
import ContactForm from './ContactForm/ContactForm';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Emails />
        <ContactForm />
      </div>
    );
  }
}
