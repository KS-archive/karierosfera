import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import Partners from './Partners/Partners';
import { Container } from '../../utils/constants/styledComponents';
import 'autotrack'

ga('create', 'GTM-NM7RXM', 'auto');

ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');

ga('send', 'pageview');
export default class Edition2017 extends Component {
  render() {
    return (
      <Container>
        <Gallery />
        <Partners />
      </Container>
    );
  }
}
