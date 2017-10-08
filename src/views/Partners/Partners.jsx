import React, { Component } from 'react';
import { Header } from './Partners_styles';
import 'autotrack'

//Gogle Analytics
ga('create', 'GTM-NM7RXM', 'auto');

ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');

ga('send', 'pageview');


export default class Partners extends Component {
  render() {
    return (
      <Header>
        Hello World!
      </Header>
    );
  }
}
