import React, { Component } from 'react';
import Emails from './Emails/Emails';
import ContactForm from './ContactForm/ContactForm';
import 'autotrack'

ga('create', 'GTM-NM7RXM', 'auto');

ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');

ga('send', 'pageview');
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
